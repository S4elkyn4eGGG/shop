import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { fetchPhones } from 'actions'

class App extends Component {
  componentDidMount() {
      this.props.fetchPhones();
  }
  render() {
    return (
      <div className="App">
          My Shop
      </div>
    );
  }
}

export default withRouter(connect(
    state => ({}),
    dispatch => ({
        fetchPhones: () => {
            dispatch(fetchPhones());
        }
    })
)(App));
