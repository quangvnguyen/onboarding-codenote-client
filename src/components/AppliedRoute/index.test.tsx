import React from 'react';
import { shallow } from 'enzyme';
import { AppliedRoute } from './index';

test('renders without crashing', () => {
  const wrapper = shallow(<AppliedRoute />);
  expect(wrapper).toMatchSnapshot();
});
