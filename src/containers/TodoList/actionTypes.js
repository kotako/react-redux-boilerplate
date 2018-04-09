// @flow

import type { Todo } from '../../types';

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const Actions = {
  TOGGLE_TODO
};

export type ToggleTodo = {
  type: typeof TOGGLE_TODO,
  todo: Todo
};

export type Action = ToggleTodo;
