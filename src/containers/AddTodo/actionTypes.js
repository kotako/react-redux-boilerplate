// @flow

import type { Todo } from '../../types';

export const ADD_TODO = 'ADD_TODO';

export const Actions = {
  ADD_TODO
};

export type AddTodo = {
  type: typeof ADD_TODO,
  todo: Todo
};

export type Action = AddTodo;
