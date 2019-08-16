import React from 'react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Navigation from './index';

const mockStore = configureMockStore();
window.location.href= '/notes';

describe("Navigation component", () => {
  it('renders without authenticated', () => {
    const store = mockStore({
      authenticate: {}
    });
    const wrapper = mount(
      <Router>
        <Navigation store={store} />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with authenticated', () => {
    const store = mockStore({
      authenticate: {
        isAuthenticated: true,
      }
    });
    const wrapper = mount(
      <Router>
        <Navigation store={store} />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
