import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Signup from './index';

const mockStore = configureMockStore();
const store = mockStore({
  authenticate: {}
});

describe('Signup Component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <Signup store={store} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders confirm form', () => {
    const wrapper = mount(
      <Signup store={store} />
    );
    wrapper.setState({
      newUser: {},
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders when form validated', () => {
    const wrapper = mount(
      <Signup store={store} />
    );
    wrapper.setState({
      email: 'email@example.com',
      password: 'password',
      confirmPassword: 'password',
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('renders when handleSubmit function called', () => {
    const wrapper = mount(
      <Signup store={store} />
    );

    wrapper.find('form').simulate('submit');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders when handleSubmit function in confirm form called', () => {
    const wrapper = mount(
      <Signup store={store} />
    );
    wrapper.setState({
      newUser: {},
    });

    wrapper.find('form').simulate('submit');
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should handleChange function in email fields called', () => {
    const event = {target: {id: 'email', value: 'email'}};
    const wrapper = mount(
      <Signup store={store} />
    );

    wrapper.find('#email').simulate('change', event);
    expect(wrapper.state().email).toEqual('email');
  });

  it('should handleChange function in password fields called', () => {
    const event = {target: {id: 'password', value: 'password'}};

    const wrapper = mount(
      <Signup store={store} />
    );
    wrapper.find('#password').simulate('change', event);
    expect(wrapper.state().password).toEqual('password');
  });

  it('should handleChange function in confirmPassword fields called', () => {
    const event = {target: {id: 'confirmPassword', value: 'confirmPassword'}};

    const wrapper = mount(
      <Signup store={store} />
    );
    wrapper.find('#confirmPassword').simulate('change', event);
    expect(wrapper.state().confirmPassword).toEqual('confirmPassword');
  });
})