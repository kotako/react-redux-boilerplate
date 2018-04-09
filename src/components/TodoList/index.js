// @flow

import React from 'react';
import TodoColumn from '../TodoColumn';

import type { Todos } from '../../types';

type Props = {
  todos: Todos,
  toggleTodo: Function
};

const TodoList = ({ todos, toggleTodo }: Props) => (
  <ul>
    {todos.map(todo =>
      <TodoColumn
        key={todo.id}
        todo={todo}
        onClick={() => toggleTodo(todo)}
      />
    )}
  </ul>
);

export default TodoList;
