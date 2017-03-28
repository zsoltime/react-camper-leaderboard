import React, { Component } from 'react';

import UserRow from 'UserRow';

const urlRecent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const urlAlltime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: 'allTime',
      order: -1,
      users: [],
    };
  }
  componentDidMount() {
    const url = this.state.sortBy === 'allTime' ? urlAlltime : urlRecent;
    fetch(url)
      .then(res => res.json())
      .then((users) => {
        this.setState({ users });
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
                Past 30 Days&rsquo; Points
              </div>
              <div className="board__cell board__cell--points">
                All-Time Points
              </div>
            </div>
            <div className="board__body">
              {this.state.users.map(user => <UserRow {...user} />)}
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
