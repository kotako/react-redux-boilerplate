// @flow

import { connect } from 'react-redux';
import { actionName } from './actions';

import type { State, Dispatch } from '../../types';

const mapStateToProps = (state: State): Object => ({});

const mapDispatchToProps = (dispatch: Dispatch): Object => ({
  onFire: query => dispatch(actionName(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
