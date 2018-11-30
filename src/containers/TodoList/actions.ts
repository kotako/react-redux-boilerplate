import { Todo } from "../../types";

export const toggleTodo = (todo: Todo) => ({
  type: Actions.TOGGLE_TODO,
  todo
});

export const Actions = { TOGGLE_TODO: "TOGGLE_TODO" };
export type Action = ReturnType<typeof toggleTodo>;
