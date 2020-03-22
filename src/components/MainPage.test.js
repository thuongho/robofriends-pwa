import { shallow, mount } from 'enzyme';
import React from 'react';

import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Jordan',
      email: 'dunkinallday@gmail.com'
    }],
    searchField: 'j',
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  // instance give access to class methods
  expect(wrapper2.instance().filteredRobots())
  .toEqual([{
    id: 3,
    name: 'Jordan',
    email: 'dunkinallday@gmail.com'
  }]);
});

it('filters robots correctly 2', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Jordan',
      email: 'dunkinallday@gmail.com'
    }],
    searchField: 'x',
    isPending: false
  };
  const filteredRobots = [];
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  // instance give access to class methods
  expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots);
});

it('should show loading when pending', () => {
  const mockProps4 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Jordan',
      email: 'dunkinallday@gmail.com'
    }],
    searchField: 'j',
    isPending: true
  };
  const wrapper4 = shallow(<MainPage {...mockProps4} />);
  expect(wrapper4.contains(<h1>Loading</h1>)).toBeTruthy();
});
