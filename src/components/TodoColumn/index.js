// @flow

import React from 'react';

import type { Todo } from '../../types';

type Props = {
  onClick: Function,
  todo: Todo
};

const TodoColumn = ({ onClick, todo }: Props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: todo.completed ? 'line-through' : 'none'
    }}>
    {todo.text}
  </li>
);

export default TodoColumn;
