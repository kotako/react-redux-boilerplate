// @flow

import { Actions } from './actionTypes';

import type { Todo } from '../../types';
import type { ToggleTodo } from './actionTypes';

export const toggleTodo = (todo: Todo): ToggleTodo => ({
  type: Actions.TOGGLE_TODO,
  todo
});
