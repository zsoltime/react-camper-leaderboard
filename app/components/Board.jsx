import React, { Component } from 'react';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: 'score',
      order: -1,
    };
  }
  render() {
    return (
      <div>
        <header className="site-header">
          <h1>FCC Leaderboard</h1>
        </header>
        <div>BOARD</div>
      </div>
    );
  }
}

export default Board;
