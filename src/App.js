import React from 'react';
import { hot } from 'react-hot-loader'; // this loader is only for development

const Warning = React.lazy(() => import('./Warning'));

class App extends React.Component {
  constructor() {
    super();
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.state = {
      count: 0
    }
  }

  handleIncrease() {
    this.setState((oldState) => ({
      count: oldState.count + 1
    }));
  }

  handleDecrease() {
    this.setState((oldState) => ({
      count: oldState.count - 1
    }));
  }


  render() {
    const { count } = this.state;
    return (
      <>
        <h1>Hello React :)</h1>
        <h3>{count}</h3>
        <button onClick={this.handleDecrease}>-</button>
        <button onClick={this.handleIncrease}>+</button>
        {count > 10 ?
        <React.Suspense fallback={null}>
          <Warning />
        </React.Suspense>
        : null}
      </>
    );
  }
}

export default hot(module)(App);