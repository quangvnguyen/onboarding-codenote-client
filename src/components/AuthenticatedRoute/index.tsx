import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isAuthenticated: state.authenticate.isAuthenticated,
});

const AuthenticatedRoute = ({ component: C, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated
        ? <C {...props} />
        : <Redirect
            to={`/login?redirect=${props.location.pathname}${props.location
              .search}`}
          />}
  />
);

export default connect(mapStateToProps)(AuthenticatedRoute);
