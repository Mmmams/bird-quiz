import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  message: null,
  level: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case userActionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    case userActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userActionTypes.LOGIN_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
