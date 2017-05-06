import React from 'react';
import PropTypes from 'prop-types';

const UserRow = ({ username, img, recent, alltime }) => (
  <div className="board__row">
    <div className="board__cell board__cell--user user">
      <div className="user__avatar">
        <img src={img} alt="" />
      </div>
      <div className="user__name">
        { username }
      </div>
    </div>
    <div className="board__cell board__cell--points">{ recent.toLocaleString() }</div>
    <div className="board__cell board__cell--points">{ alltime.toLocaleString() }</div>
  </div>
);

UserRow.propTypes = {
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  recent: PropTypes.number.isRequired,
  alltime: PropTypes.number.isRequired,
};

export default UserRow;
