import birdsActionTypes from "./birds.types";

const INITIAL_STATE = {
  endGame: false,
  extraScore: 5,
  random: null,
  answered: false,
  score: 0,
  level: 1,
  birdsArray: null,
  currentBirdsArray: null,
  error: null,
};

const birdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case birdsActionTypes.FETCH_INFO_SUCCESS:
      return {
        ...state,
        birdsArray: action.payload,
      };
    case birdsActionTypes.FETCH_INFO_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case birdsActionTypes.SET_CURRENT_BIRD_ARRAY:
      return {
        ...state,
        currentBirdsArray: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default birdReducer;
