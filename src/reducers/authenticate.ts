import { HAS_AUTHENTICATED } from "../constants";

const initialState = {
  isAuthenticated: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HAS_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
      };
    }

    default: {
      return state;
    }
  }
};
