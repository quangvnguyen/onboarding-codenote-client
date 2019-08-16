import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import NewNote from './index';
import config from '../../config';

let store;
const fileMock = {
  size: 0,
};
describe('New Note component', () => {
  const mockStore = configureMockStore();
  beforeAll(() => {
    store = mockStore({
      authenticate: {}
    });
  })

  it('renders without crashing', () => {
    const wrapper = shallow(
      <NewNote store={store} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders when submit with file bigger than MAX_ATTACHMENT_SIZE', () => {
    const wrapper = mount(
      <NewNote store={store} />
    );

    wrapper.instance().file = {
      size: config.MAX_ATTACHMENT_SIZE + 1,
    }

    const component = wrapper.find('form');
    component.simulate('submit');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders when submit', () => {
    const wrapper = mount(
      <NewNote store={store} />
    );

    const component = wrapper.find('form');
    component.simulate('submit');
    expect(wrapper).toMatchSnapshot();
  });

  it('should handleChange function called', () => {
    const event = {target: {id: 'content', value: 'content'}};
    const wrapper = mount(
      <NewNote store={store} />
    );

    wrapper.find('#content').simulate('change', event);
    expect(wrapper.state().content).toEqual('content');
  });

  it('should handleFileChange function called', () => {
    const event = {target: {id: 'file', files: [fileMock]}};
    const wrapper = mount(
      <NewNote store={store} />
    );

    wrapper.find('#file').simulate('change', event);
    expect(wrapper.instance().file).toEqual(fileMock);
  });
})