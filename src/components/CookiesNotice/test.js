import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CookiesNotice from './';

configure({ adapter: new Adapter() });

describe('CookiesNotice component', () => {
  it('handle accept action', () => {
    const wrapper = mount(<CookiesNotice />);
    expect(wrapper.state().visible).toBe(true);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().visible).toBe(false);
  });
});
