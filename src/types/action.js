// @flow

import type { Action as AddTodoAction } from '../containers/AddTodo/actionTypes';
import type { Action as ToggleTodoAction } from '../containers/TodoList/actionTypes';

export type ReduxInitAction = { type: '@@redux/INIT' };

export type Action = ReduxInitAction | AddTodoAction | ToggleTodoAction;
