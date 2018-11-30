import { Action as AddTodoAction } from "../containers/AddTodo/actions";
import { Action as ToggleTodoAction } from "../containers/TodoList/actions";

export type Action = AddTodoAction | ToggleTodoAction;
