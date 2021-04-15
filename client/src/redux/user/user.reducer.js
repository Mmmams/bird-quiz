import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  level: 1,
  message: null,
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
    case userActionTypes.UPDATE_LEVEL_SUCCESS:
      return {
        ...state,
        level: action.payload,
      };
    case userActionTypes.UPDATE_LEVEL_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    case userActionTypes.GET_LEVEL_SUCCESS:
      return {
        ...state,
        level: action.payload,
      };
    case userActionTypes.GET_LEVEL_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    case userActionTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case userActionTypes.RESET_LEVEL_SUCCESS:
      return {
        ...state,
        level: action.payload,
      };
    case userActionTypes.RESET_LEVEL_FAIL:
      return {
        ...state,
        messgae: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
