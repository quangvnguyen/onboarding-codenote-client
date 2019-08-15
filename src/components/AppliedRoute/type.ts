import * as H from 'history';
import { StaticContext, match } from 'react-router';

export interface RouteComponentProps<Params extends { [K in keyof Params]?: string } = {}, C extends StaticContext = StaticContext, S = H.LocationState> {
  history: H.History;
  location: H.Location<S>;
  match: match<Params>;
  staticContext?: C;
}

export interface IAppliedRouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  props?: Object;
  exact?: boolean;
  path?: string;
}
