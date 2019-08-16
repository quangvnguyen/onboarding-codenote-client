import React from 'react';
import { shallow } from 'enzyme';
import RouterApp, { App } from './App';

test('renders without crashing', () => {
  const wrapper = shallow(<RouterApp />);
  expect(wrapper).toMatchSnapshot();
});

test('renders with isAuthenticating', () => {
  const props = {
    userHasAuthenticated: jest.fn(),
  };
  const wrapper = shallow(<App {...props} />);
  wrapper.setState({
    isAuthenticating: false,
  })
  expect(wrapper).toMatchSnapshot();
});