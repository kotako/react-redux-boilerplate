// @flow

export const ACTION_NAME = 'ACTION_NAME';

export const Actions = {
  ACTION_NAME
};

export type ActionName = {
  type: typeof ACTION_NAME,
  query: number
};

export type Action = ActionName;
