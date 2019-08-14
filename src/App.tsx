import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import './App.css';
import ScreensRoot from './screens/Root';
import { hasAuthenticated } from './actions';

const mapDispatchToProps = dispatch => {
  return {
    userHasAuthenticated: isAuthenticated => {
      dispatch(hasAuthenticated(isAuthenticated))
    }
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      const { userHasAuthenticated } = this.props;
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  render() {
    const { isAuthenticating } = this.state;

    return (
      !isAuthenticating &&
      <div className="App container">
        <ScreensRoot />
      </div>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
