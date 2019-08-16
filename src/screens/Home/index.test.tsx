import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Home from './index';

describe('Home component', () => {
  const mockStore = configureMockStore();

  it('renders without authenticate', () => {
    const store = mockStore({
      authenticate: {}
    });
    const wrapper = mount(
      <Home store={store} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with authenticate', () => {
    const store = mockStore({
      authenticate: {
        isAuthenticated: true,
      }
    });
    const wrapper = mount(
      <Home store={store} />
    );
    expect(wrapper).toMatchSnapshot();
  });
})
