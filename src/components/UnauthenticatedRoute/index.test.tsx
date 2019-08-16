import React from 'react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import UnauthenticatedRoute from './index';

const mockStore = configureMockStore();
window.location.href= '/notes';

describe("UnauthenticatedRoute Route component", () => {
  it('renders without crashing with authenticated', () => {
    const store = mockStore({
      authenticate: {
        isAuthenticated: true,
      }
    });
    const wrapper = mount(
      <Router>
        <UnauthenticatedRoute store={store} />
      </Router>
    );
    expect(wrapper).toMatchSnapshot();
  });

});
