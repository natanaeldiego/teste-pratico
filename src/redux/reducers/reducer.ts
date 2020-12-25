import { combineReducers } from 'redux';
import { types } from '../types';

const INITIAL_STATE = {
  resultPages: [],
  isPages: false
}

const pages = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case types.ADD_PAGES:
      return { ...state, resultPages: action.payload }
    default:
      return state;
  }
};

const isPages = (state = INITIAL_STATE, action:any) => {
  switch (action.type) {
    case types.IS_PAGES:
      return { ...state, isPages: action.payload }
    default:
      return state;
  }
};

const reducers = combineReducers({
  pages,
  isPages
})

export { reducers };
