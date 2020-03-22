import { shallow } from 'enzyme';
import React from 'react';

import CardList from './CardList';

it('should render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Sam',
      email: 'sam@gmail.com'
    }
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
