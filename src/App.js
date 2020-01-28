import React from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { COUNT_ACTIONS } from './actions/actions';
import _ from 'lodash';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { customAmount: '' };
  }

  onHandleChange = event => {
    this.setState({ customAmount: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { submit } = this.props;
    const { customAmount: value } = this.state;

    if (Number(value) < 10) {
      submit(value);
    } else {
      this.setState({ customAmount: '' });
    }
  };

  render() {
    const { count, increment, decrement, reset } = this.props;
    const { customAmount } = this.state;

    return (
      <div className="App">
        <header className="buttons-container">
          <button className="btn btn-success" onClick={increment}>
            Count up!
          </button>
          <button className="btn btn-warning" onClick={decrement}>
            Count down!
          </button>
          <button className="btn btn-danger" onClick={reset}>
            Reset
          </button>
        </header>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              type="number"
              value={customAmount}
              placeholder="Enter a custom amount"
              onChange={this.onHandleChange}
            />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
        <div className="logo-container">
          {_.times(count, index => (
            <img key={index} src={logo} className="App-logo" alt="logo" />
          ))}
        </div>
        <footer className="footer">
          Check out the repository{' '}
          <a
            href="https://github.com/davidholyko/redux-mini-boilerplate"
            rel="noopener noreferrer"
            target="_blank"
          >
            here!
          </a>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { counter } = state;
  const { count } = counter;

  return { count };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch({ type: COUNT_ACTIONS.COUNT_UP });
    },
    decrement: () => {
      dispatch({ type: COUNT_ACTIONS.COUNT_DOWN });
    },
    reset: () => {
      dispatch({ type: COUNT_ACTIONS.COUNT_RESET });
    },
    submit: amount => {
      dispatch({ type: COUNT_ACTIONS.COUNT_SUBMIT, payload: amount });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
