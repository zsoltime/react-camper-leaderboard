import React, { Component } from 'react';

import Header from 'Header';
import Footer from 'Footer';
import SortButton from 'SortButton';
import UserRow from 'UserRow';

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
    this.ariaSort = this.ariaSort.bind(this);
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
  ariaSort(sortBy) {
    if (sortBy !== this.state.sortBy) {
      return null;
    }
    return this.state.order === 1 ? 'ascending' : 'descending';
  }
  sortedList() {
    const sortFn = (a, b) => {
      const { order, sortBy } = this.state;

      if (sortBy !== 'username') {
        return (a[sortBy] - b[sortBy]) * order;
      }
      if (a.username.toUpperCase() < b.username.toUpperCase()) {
        return order * -1;
      }
      if (a.username.toUpperCase() > b.username.toUpperCase()) {
        return order;
      }
      return 0;
    };

    return this.state.users.sort(sortFn);
  }
  render() {
    return (
      <div>
        <Header />
        <main className="board">
          <div className="table" role="grid">
            <div
              className="table__header table__header--sticky"
              role="row toolbar"
              aria-label="Sorting options"
              aria-controls="sortable"
            >
              <div
                className="table__cell table__cell--user"
                role="columnheader"
                aria-sort={this.ariaSort('username')}
              >
                <SortButton
                  className={this.getButtonClassNames('username')}
                  onClickEvent={() => this.handleClick('username')}
                  ariaLabel="Sort by username"
                >
                  Camper
                </SortButton>
              </div>
              <div
                className="table__cell table__cell--points"
                role="columnheader"
                aria-sort={this.ariaSort('recent')}
              >
                <SortButton
                  className={this.getButtonClassNames('recent')}
                  onClickEvent={() => this.handleClick('recent')}
                  ariaLabel="Sort by past 30 days points"
                >
                  Past 30 Days&rsquo; Points
                </SortButton>
              </div>
              <div
                className="table__cell table__cell--points"
                role="columnheader"
                aria-sort={this.ariaSort('alltime')}
              >
                <SortButton
                  className={this.getButtonClassNames('alltime')}
                  onClickEvent={() => this.handleClick('alltime')}
                  ariaLabel="Sort by alltime points"
                >
                  All-Time Points
                </SortButton>
              </div>
            </div>
            <div className="table__body" role="rowgroup">
              {this.sortedList().map(user => (
                <UserRow key={user.username} {...user} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Board;
