import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import UserRow from 'UserRow';

describe('<UserRow />', () => {
  it('should exist', () => {
    expect(UserRow).toExist();
  });

  describe('render', () => {
    it('should render a row with user details', () => {
      const user = {
        username: 'Peter',
        img: 'peter.jpg',
        recent: 5,
        alltime: 41,
      };
      const row = shallow(
        <UserRow {...user} />
      );
      const username = row.find('.user__name');
      const img = row.find({ src: user.img });
      const recent = row.find('.board__cell--points').first();
      const alltime = row.find('.board__cell--points').last();

      expect(username.text()).toBe(user.username);
      expect(img.length).toBe(1);
      expect(recent.text()).toBe(user.recent.toString());
      expect(alltime.text()).toBe(user.alltime.toString());
    });
  });
});
