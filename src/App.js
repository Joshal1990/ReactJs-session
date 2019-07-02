import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

class App extends React.Component {
  
  render(){
  return (
    // <div className="game">
    //   <div className = "game-board">
    //       <Board/>
    //   </div>
    //   <div className = "game-info">
    //     <div>{/* status */}</div>
    //     <div>{/* TODO */}</div>
    //   </div>
    // </div>
    <Board/>
  );
  }
}

export default App;
