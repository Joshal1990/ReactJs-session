import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(prop){
    super(prop);
    this.state = {
      name: prop.name
    }
  }
  render(){
  return (
    <UserDetail></UserDetail>
  );
  }
}

export default App;
