import React from 'react';
import { hot } from 'react-hot-loader'; // this loader is only for development so remove it for production releases

class App extends React.Component {
  render() {
    return (
      <h1>Hello React :)</h1>
    );
  }
}

export default hot(module)(App);