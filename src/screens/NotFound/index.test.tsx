import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './index';

test('renders without crashing', () => {
  const wrapper = shallow(
    <NotFound />
  );
  expect(wrapper).toMatchSnapshot();
});
