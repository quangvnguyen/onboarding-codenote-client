import React from 'react';
import { Route } from 'react-router-dom';

const AppliedRoute = ({ component: C, ...rest }) =>
  <Route {...rest} render={ props => <C {...props} /> } />;

export default AppliedRoute;
