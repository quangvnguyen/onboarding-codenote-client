import { HAS_AUTHENTICATED } from "../constants";

export const hasAuthenticated = (isAuthenticated) => ({
  type: HAS_AUTHENTICATED,
  payload: {
    isAuthenticated,
  },
});
