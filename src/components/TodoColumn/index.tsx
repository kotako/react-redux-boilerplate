import React from "react";
import { Todo } from "./../../types";

interface Props {
  onClick: () => void;
  todo: Todo;
}

const TodoColumn = ({ onClick, todo }: Props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: todo.completed ? "line-through" : "none"
    }}
  >
    {todo.text}
  </li>
);

export default TodoColumn;
