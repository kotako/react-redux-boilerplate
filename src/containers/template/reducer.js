// @flow

import { Actions as TemplateActions } from './actionTypes';

import type { Action } from '../../types';

export type State = Array<number>;

export default (state: State = [], action: Action): State => {
  switch (action.type) {
    case TemplateActions.ACTION_NAME:
      return state;
    default:
      return state;
  }
};
