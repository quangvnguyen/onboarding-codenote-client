import React from 'react';
import { Route } from 'react-router-dom';
import { IAppliedRouteProps } from './type';

const AppliedRoute = ({ component: C, props: cProps, ...rest }: IAppliedRouteProps) =>
  <Route {...rest} render={ props => <C {...props} {...cProps} /> } />;

export default AppliedRoute;
