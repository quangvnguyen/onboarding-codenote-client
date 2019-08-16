import React from 'react';
import { shallow } from 'enzyme';
import LoaderButton from './index';

test('renders without loading', () => {
  const wrapper = shallow(<LoaderButton />);
  expect(wrapper).toMatchSnapshot();
});

test('renders with loading', () => {
  const wrapper = shallow(<LoaderButton isLoading={true} />);
  expect(wrapper).toMatchSnapshot();
});

test('renders without disabled', () => {
  const wrapper = shallow(<LoaderButton disabled={false} />);
  expect(wrapper).toMatchSnapshot();
});

test('renders with disabled', () => {
  const wrapper = shallow(<LoaderButton disabled={true} />);
  expect(wrapper).toMatchSnapshot();
});
