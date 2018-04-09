// @flow

import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoTextForm from '../../components/TodoTextForm';

import type { Dispatch, State } from '../../types';

const mapStateToProps = (state: State): Object => ({});

const mapDispatchToProps = (dispatch: Dispatch): Object => ({
  addTodo: (text: string) => dispatch(addTodo({
    id: Date.now(),
    completed: false,
    text
  }))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoTextForm);
