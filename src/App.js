import React, { Component } from 'react';
import './App.css';
import Global from './containers/Global'

// App //
class App extends Component {

  render() {
    const {userData} = this.props;

    return (
      <Global userData={userData}/>
    );
  }
}

export default App;
