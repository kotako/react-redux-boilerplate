import React from "react";
import TodoColumn from "../TodoColumn";
import { Todo } from "../../types";

interface Props {
  todos: Array<Todo>;
  toggleTodo: (todo: any) => void;
}

const TodoList = ({ todos, toggleTodo }: Props) => (
  <ul>
    {todos.map(todo => (
      <TodoColumn key={todo.id} todo={todo} onClick={() => toggleTodo(todo)} />
    ))}
  </ul>
);

export default TodoList;
