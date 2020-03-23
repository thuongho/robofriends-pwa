import * as actions from './actions';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
  const text = 'wooo!';
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('should handle requesting robots API', () => {
  // create fake store so that it has thunkMiddleware
  const store = mockStore();
  // returns an action that takes dispatch
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  };
  // first thing we dispatch is the PENDING - see action
  expect(action[0]).toEqual(expectedAction);
});
