import { connect } from "react-redux";
import TodoTextForm from "../../components/TodoTextForm";
import { State, Dispatch } from "../../types";
import { addTodo } from "./actions";

const mapStateToProps = (_: State): Object => ({});

const mapDispatchToProps = (dispatch: Dispatch): Object => ({
  addTodo: (text: string) =>
    dispatch(
      addTodo({
        id: Date.now(),
        completed: false,
        text
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoTextForm);
