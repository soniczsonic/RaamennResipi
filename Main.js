import Routes from "./Routes"
import store from './Store'
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Routes store={store}/>
    );
  }
}



export default App 