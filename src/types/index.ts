import { Store as ReduxStore, DispatchAPI as ReduxDispatch } from "redux";
import { Action as _Action } from "./action";
import { State as _State } from "./state";

// types for react-redux
export type Action = _Action;
export type Dispatch = ReduxDispatch<Action>;
export type State = _State;
export type Store = ReduxStore<State, Action>;

// types for app
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
