import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  level: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
