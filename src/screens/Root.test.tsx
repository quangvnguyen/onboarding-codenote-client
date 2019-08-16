import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root';

test('renders without crashing', () => {
  const wrapper = shallow(
    <Root />
  );
  expect(wrapper).toMatchSnapshot();
});
