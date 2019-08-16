import React from 'react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import AuthenticatedRoute from './index';

const mockStore = configureMockStore();
window.location.href= '/notes';

describe("Authenticated Route component", () => {
  it('renders without authenticated', () => {
    const store = mockStore({
      authenticate: {}
    });
    const wrapper = mount(
      <Router>
        <AuthenticatedRoute store={store} />
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
    const wrapper = shallow(
      <AuthenticatedRoute store={store} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
