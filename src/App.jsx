import React, { Component } from 'react';
import HomePage from './components/HomePage/HomePage.jsx';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <h1>App Component</h1>
      </div>
    );
  }
}

export default App;
