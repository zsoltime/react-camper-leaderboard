import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SortButton from 'SortButton';

describe('<SortButton />', () => {
  it('should exist', () => {
    expect(SortButton).toExist();
  });

  describe('render', () => {
    const props = {
      color: '#ccc',
      size: 32,
      onClickEvent: f => f,
    };

    it('should render a button', () => {
      const button = shallow(
        <SortButton {...props}>X</SortButton>
      );
      const el = button.find('button');

      expect(el.length).toBe(1);
    });

    it('should render child elements', () => {
      const child = 'Child';
      const button = shallow(
        <SortButton {...props}>{child}</SortButton>
      );
      const el = button.find('button');

      expect(el.text()).toBe(child);
    });

    it('should have the correct size', () => {
      const button = shallow(
        <SortButton {...props}>X</SortButton>
      );
      const svg = button.find('svg');

      expect(svg.prop('width')).toBe(props.size);
      expect(svg.prop('height')).toBe(props.size);
    });

    it('should have the correct color', () => {
      const button = shallow(
        <SortButton {...props}>X</SortButton>
      );
      const arrowUp = button.find('path').first();
      const arrowDown = button.find('path').last();

      expect(arrowUp.prop('fill')).toBe(props.color);
      expect(arrowDown.prop('fill')).toBe(props.color);
    });
  });

  describe('onClick', () => {
    it('should call a callback function when clicked', () => {
      const spy = expect.createSpy();
      const props = {
        size: 12,
        color: 'red',
        onClickEvent: spy,
      };
      const button = shallow(
        <SortButton {...props}>X</SortButton>
      );

      const btn = button.find('button');
      btn.simulate('click');

      expect(spy).toHaveBeenCalled();
    });
  });
});
