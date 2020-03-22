import { shallow } from 'enzyme';
import React from 'react';

import Card from './Card';

it('Card component to render', () => {
  expect(shallow(<Card />).length).toMatchSnapshot();
});
