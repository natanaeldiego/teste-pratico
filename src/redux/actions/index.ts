import { createAction } from 'redux-actions';

import { types } from '../types';

const actions = {
  addPages: createAction(types.ADD_PAGES),
  isPages: createAction(types.IS_PAGES),
}

export { actions };
