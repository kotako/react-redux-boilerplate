// @flow

import { Actions as TodoListActions } from './actionTypes';
import { Actions as AddTodoActions } from '../AddTodo/actionTypes';

import type { Todos, Action } from '../../types';

export type State = Todos;

export default (state: State = [], action: Action): State => {
  switch (action.type) {
    case AddTodoActions.ADD_TODO:
      return [ ...state, action.todo ];
    case TodoListActions.TOGGLE_TODO:
      let targetTodo = { ...action.todo, completed: !action.todo.completed };
      return state.map(todo => (todo.id === targetTodo.id) ? targetTodo : todo);
    default:
      return state;
  }
};
