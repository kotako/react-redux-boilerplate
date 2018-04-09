// @flow

import { Actions } from './actionTypes';

import type { Todo } from '../../types';
import type { AddTodo } from './actionTypes';

export const addTodo = (todo: Todo): AddTodo => ({
  type: Actions.ADD_TODO,
  todo
});
