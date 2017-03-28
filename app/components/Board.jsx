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
    this.setSort = this.setSort.bind(this);
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
  setSort(col) {
    if (col === this.state.sortBy) {
      this.setState(prevState => ({
        order: prevState.order * -1,
      }));
    } else {
      this.setState({
        sortBy: col,
      });
    }
  }
  getButtonClassNames(sortBy) {
    const order = this.state.order === -1 ? 'btn-sort--desc' : 'btn-sort--asc';
    if (this.state.sortBy === sortBy) {
      return `btn-sort btn-sort--active ${order}`;
    }
    return 'btn-sort';
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
      <div>
        <header className="site-header">
          <h1>FCC Leaderboard</h1>
        </header>
        <div className="container">
          <div className="board">
            <div className="board__header board__header--sticky">
              <div className="board__cell board__cell--user">Camper</div>
              <div className="board__cell board__cell--points">
                <SortButton
                  className={this.getButtonClassNames('recent')}
                  onClickEvent={() => this.setSort('recent')}
                >
                  Past 30 Days&rsquo; Points
                </SortButton>
              </div>
              <div className="board__cell board__cell--points">
                <SortButton
                  className={this.getButtonClassNames('alltime')}
                  onClickEvent={() => this.setSort('alltime')}
                >
                  All-Time Points
                </SortButton>
              </div>
            </div>
            <div className="board__body">
              {this.sortedList().map(user => <UserRow {...user} />)}
            </div>
          </div>
        </div>
        <footer className="site-footer">
          <div className="container">
            <p className="copyright">Made by <a href="http://zsolti.co" title="Zsolt Meszaros">Zsolt Meszaros</a></p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Board;
