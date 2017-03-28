import React, { PropTypes } from 'react';

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
    <div className="board__cell board__cell--points">{ recent }</div>
    <div className="board__cell board__cell--points">{ alltime }</div>
  </div>
);

UserRow.propTypes = {
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  recent: PropTypes.number.isRequired,
  alltime: PropTypes.number.isRequired,
};

export default UserRow;
