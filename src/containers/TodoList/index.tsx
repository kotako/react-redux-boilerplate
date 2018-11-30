import { connect } from "react-redux";
import TodoList from "../../components/TodoList";
import { toggleTodo } from "./actions";
import { State, Dispatch } from "../../types";
import { Todo } from "../../types/index";

const mapStateToProps = (state: State): Object => ({
  todos: state.TodoList
});

const mapDispatchToProps = (dispatch: Dispatch): Object => ({
  toggleTodo: (todo: Todo) => dispatch(toggleTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
