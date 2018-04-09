// @flow

import { Actions } from './actionTypes';

import type { ActionName } from './actionTypes';

export const actionName = (query: number): ActionName => ({
  type: Actions.ACTION_NAME,
  query
});
