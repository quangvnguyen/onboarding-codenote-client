import React from 'react';
import configureMockStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import NoteDetail from './index';
import config from '../../config';

const mockStore = configureMockStore();
let store;
const initialState = {
  note: {
    attachment: 'attachment',
  },
  content: 'content',
} 
const fileMock = {
  size: 0,
};

describe('Note Detail component', () => {
  beforeAll(() => {
    store = mockStore({
      authenticate: {}
    });
  });

  it('renders without crashing', () => {
    const wrapper = shallow(
      <NoteDetail store={store} />
    );
    wrapper.setState(initialState)
    expect(wrapper).toMatchSnapshot();
  });

  it('renders when handleDelete function called', () => {
    const wrapper = shallow(
      <NoteDetail store={store} />
    );

    wrapper.setState(initialState);

    wrapper.findWhere(node => node.props().text === 'Delete').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders when handleSubmit function called', () => {
    const wrapper = shallow(
      <NoteDetail store={store} />
    );
    wrapper.setState(initialState);

    const component = wrapper.find('form');
    component.simulate('submit');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders when submit with file bigger than MAX_ATTACHMENT_SIZE', () => {
    const wrapper = mount(
      <NoteDetail store={store} />
    );
    wrapper.setState(initialState);
    wrapper.instance().file = {
      size: config.MAX_ATTACHMENT_SIZE + 1,
    }

    const component = wrapper.find('form');
    component.simulate('submit');
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should handleChange function called', () => {
    const event = {target: {id: 'content', value: 'content'}};
    const wrapper = mount(
      <NoteDetail store={store} />
    );
    wrapper.setState(initialState);

    wrapper.find('#content').simulate('change', event);
    expect(wrapper.state().content).toEqual('content');
  });

  it('should handleFileChange function called', () => {
    const event = {target: {id: 'file', files: [fileMock]}};
    const wrapper = mount(
      <NoteDetail store={store} />
    );
    wrapper.setState(initialState);

    wrapper.find('#file').simulate('change', event);
    expect(wrapper.instance().file).toEqual(fileMock);
  });
})