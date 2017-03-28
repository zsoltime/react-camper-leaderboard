import React, { Component } from 'react';

import UserRow from 'UserRow';
import SortButton from 'SortButton';

const url = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: true,
      sortBy: 'recent',
      order: -1,
      users: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then((users) => {
        this.setState({
          users,
          isFetching: false,
        });
      });
  }
  getButtonClassNames(sortBy) {
    const order = this.state.order === -1 ? 'btn-sort--desc' : 'btn-sort--asc';
    if (this.state.sortBy === sortBy) {
      return `btn-sort btn-sort--active ${order}`;
    }
    return 'btn-sort';
  }
  handleClick(sortBy) {
    if (sortBy === this.state.sortBy) {
      this.setState(prevState => ({
        order: prevState.order * -1,
      }));
    } else {
      this.setState({
        sortBy,
      });
    }
  }
  sortedList() {
    return this.state.users.sort((a, b) => {
      if (this.state.order === 1) {
        return a[this.state.sortBy] - b[this.state.sortBy];
      }
      return b[this.state.sortBy] - a[this.state.sortBy];
    });
  }
  render() {
    return (
      <div className="board">
        <div className="board__header board__header--sticky">
          <div className="board__cell board__cell--user">Camper</div>
          <div className="board__cell board__cell--points">
            <SortButton
              className={this.getButtonClassNames('recent')}
              onClickEvent={() => this.handleClick('recent')}
            >
              Past 30 Days&rsquo; Points
            </SortButton>
          </div>
          <div className="board__cell board__cell--points">
            <SortButton
              className={this.getButtonClassNames('alltime')}
              onClickEvent={() => this.handleClick('alltime')}
            >
              All-Time Points
            </SortButton>
          </div>
        </div>
        <div className="board__body">
          {this.sortedList().map(user => (
            <UserRow key={user.username} {...user} />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
