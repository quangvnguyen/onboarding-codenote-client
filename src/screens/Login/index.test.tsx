import React from 'react';
import { mount, shallow } from 'enzyme';
import { Login } from './index';

describe('Login component', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(
      <Login />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with form validated', () => {
    const wrapper = mount(
      <Login />
    );
    wrapper.setState({
      email: 'email',
      password: 'password',
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handleChange function in email fields called', () => {
    const event = {target: {id: 'email', value: 'email'}};
    const wrapper = mount(
      <Login />
    );

    wrapper.find('#email').simulate('change', event);
    expect(wrapper.state().email).toEqual('email');
  });


  it('should handleChange function in password fields called', () => {
    const event = {target: {id: 'password', value: 'password'}};

    const wrapper = mount(
      <Login />
    );
    wrapper.find('#password').simulate('change', event);
    expect(wrapper.state().password).toEqual('password');
  });

  it('should handleSubmit function called', () => {
    const props = {
      userHasAuthenticated: jest.fn(),
    };

    const wrapper = mount(
      <Login {...props} />
    );

    const component = wrapper.find('form');
    component.simulate('submit');

    expect(props.userHasAuthenticated).toHaveBeenCalled();
  });
})