import React, { FC } from "react";
import { ITask } from "../App";

interface Props {
  task: ITask;
}
const TodoTask: FC<Props> = ({ task }) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button>X</button>
    </div>
  );
};

export default TodoTask;
