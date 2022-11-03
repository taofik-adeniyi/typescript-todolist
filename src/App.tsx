import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask";

export interface ITask {
  taskName: string;
  deadline: number;
}

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(event.target.valueAsNumber);
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline };
    setTodoList((prevTodo) => [...prevTodo, newTask]);
    setTask("");
    setDeadline(0);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Task..."
            onChange={handleChange}
          />
          <input
            type="number"
            name="deadline"
            value={deadline.toString()}
            placeholder="Deadline (in days)"
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((todo: ITask, key) => (
          <TodoTask key={key} task={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
