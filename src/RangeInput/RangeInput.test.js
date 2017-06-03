import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import RangeInput from './RangeInput';

describe('<RangeInput />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RangeInput />, div);
  });

  it('accepts a minimum value', () => {
    const wrapper = shallow(<RangeInput min='1' />);
    expect(wrapper.find('input').props()).toHaveProperty('min', '1');
  });

  it('sets a minimum value of 0 if no min is defined', () => {
    const wrapper = shallow(<RangeInput />);
    expect(wrapper.find('input').props()).toHaveProperty('min', '0');
  });

  it('accepts a maximum value', () => {
    const wrapper = shallow(<RangeInput max='2' />);
    expect(wrapper.find('input').props()).toHaveProperty('max', '2');
  });

  it('sets a maximum value of 100 if no max is defined', () => {
    const wrapper = shallow(<RangeInput />);
    expect(wrapper.find('input').props()).toHaveProperty('max', '100');
  });

  it('accepts a default initial value', () => {
    const wrapper = shallow(<RangeInput default='45' />);
    expect(wrapper.find('input').props()).toHaveProperty('value', '45');
  });

  it('sets a title string to desribe the range slider', ()=> {
    const wrapper = shallow(<RangeInput title='Range Title' default='40' />);
    expect(wrapper.find('.range-input__value').text()).toEqual('Range Title: 40');
  })
});
