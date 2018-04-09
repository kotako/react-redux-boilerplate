// @flow

import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import { toggleTodo } from './actions';

import type { State, Dispatch } from '../../types';

const mapStateToProps = (state: State): Object => ({
  todos: state.TodoList
});

const mapDispatchToProps = (dispatch: Dispatch): Object => ({
  toggleTodo: todo => dispatch(toggleTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
