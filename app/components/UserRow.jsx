import React from 'react';
import PropTypes from 'prop-types';

const UserRow = ({ username, img, recent, alltime }) => (
  <div className="table__row" role="row">
    <div className="table__cell table__cell--user user" role="gridcell">
      <div className="user__avatar">
        <img src={img} alt="" />
      </div>
      <div className="user__name">
        { username }
      </div>
    </div>
    <div className="table__cell table__cell--points" role="gridcell">
      { recent.toLocaleString() }
    </div>
    <div className="table__cell table__cell--points" role="gridcell">
      { alltime.toLocaleString() }
    </div>
  </div>
);

UserRow.propTypes = {
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  recent: PropTypes.number.isRequired,
  alltime: PropTypes.number.isRequired,
};

export default UserRow;
