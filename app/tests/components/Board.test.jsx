import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Board from 'Board';
import UserRow from 'UserRow';
import SortButton from 'SortButton';

describe('<Board />', () => {
  it('should exist', () => {
    expect(Board).toExist();
  });

  const users = [{
    username: 'ccc',
    img: 'ccc.jpg',
    recent: 12,
    alltime: 20,
  }, {
    username: 'aaa',
    img: 'aaa.jpg',
    recent: 5,
    alltime: 55,
  }, {
    username: 'ddd',
    img: 'ddd.jpg',
    recent: 41,
    alltime: 70,
  }, {
    username: 'bbb',
    img: 'bbb.jpg',
    recent: 7,
    alltime: 33,
  }];

  describe('render', () => {
    it('should render the correct number of users', () => {
      const board = shallow(<Board />);
      board.setState({ users: users.slice() });

      const userRows = board.find(UserRow);
      expect(userRows.length).toBe(users.length);
    });

    it('should render users in the correct order', () => {
      const board = shallow(<Board />);
      board.setState({ users: users.slice() });

      const userRows = board.find(UserRow);
      expect(userRows.at(0).prop('username')).toBe(users[2].username);
      expect(userRows.at(1).prop('username')).toBe(users[0].username);
      expect(userRows.at(2).prop('username')).toBe(users[3].username);
      expect(userRows.at(3).prop('username')).toBe(users[1].username);
    });

    it('should update user order on state change', () => {
      const board = shallow(<Board />);
      board.setState({
        users: users.slice(),
        sortBy: 'alltime',
        order: 1,
      });

      const userRows = board.find(UserRow);
      expect(userRows.at(0).prop('username')).toBe(users[0].username);
      expect(userRows.at(1).prop('username')).toBe(users[3].username);
      expect(userRows.at(2).prop('username')).toBe(users[1].username);
      expect(userRows.at(3).prop('username')).toBe(users[2].username);
    });

    it('should render the sort buttons with correct class names', () => {
      const board = shallow(<Board />);
      const sortButtonRecent = board.find(SortButton).first();
      const sortButtonAlltime = board.find(SortButton).last();

      expect(sortButtonRecent.length).toBe(1);
      expect(sortButtonRecent.hasClass('btn-sort')).toBe(true);
      expect(sortButtonRecent.hasClass('btn-sort--active')).toBe(true);
      expect(sortButtonRecent.hasClass('btn-sort--desc')).toBe(true);
      expect(sortButtonAlltime.hasClass('btn-sort')).toBe(true);
      expect(sortButtonAlltime.hasClass('btn-sort--active')).toBe(false);
      expect(sortButtonAlltime.hasClass('btn-sort--desc')).toBe(false);
    });
  });

  describe('handleClick', () => {
    it('should change state when handleClick is called', () => {
      const board = shallow(<Board />);

      expect(board.state().sortBy).toBe('recent');
      expect(board.state().order).toBe(-1);

      board.instance().handleClick('recent');

      expect(board.state().sortBy).toBe('recent');
      expect(board.state().order).toBe(1);

      board.instance().handleClick('alltime');

      expect(board.state().sortBy).toBe('alltime');
      expect(board.state().order).toBe(1);

      board.instance().handleClick('alltime');

      expect(board.state().sortBy).toBe('alltime');
      expect(board.state().order).toBe(-1);
    });
  });
});
