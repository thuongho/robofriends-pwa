import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';
import * as actions from './actions';

describe('searchBots', () => {
  const initialSearchField = {
    searchField: ''
  };
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialSearchField);
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(
      reducers.searchRobots(initialSearchField, actions.setSearchField('abc'))
    ).toEqual({searchField: 'abc'});
  });
});

describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING
      }))
    .toEqual({
      robots: [],
      isPending: true
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{
          id: 123,
          name: 'Sam',
          email: 'sam@gmail.com'
        }]
      }))
    .toEqual({
      robots: [{
        id: 123,
        name: 'Sam',
        email: 'sam@gmail.com'
      }],
      isPending: false
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'Nooooo!'
      }))
    .toEqual({
      error: 'Nooooo!',
      robots: [],
      isPending: false
    });
  });
});
