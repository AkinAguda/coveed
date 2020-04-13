import * as userActions from "../../actions/types";

const initialState = {
  loggedIn: false,
  auth: {
    google: {
      setup: false,
    },
    phone: {
      setup: false,
    },
    twitter: {
      setup: false,
    },
    facebook: {
      setup: false,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userActions.LOG_USER_IN:
      return {
        ...state,
        loggedIn: true,
      };

    default:
      return state;
  }
};
