import { Todo } from "../../types";

export const addTodo = (todo: Todo) => ({
  type: Actions.ADD_TODO,
  todo
});

export const Actions = { ADD_TODO: "ADD_TODO" };
export type Action = ReturnType<typeof addTodo>;
