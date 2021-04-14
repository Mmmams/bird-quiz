import birdsActionTypes from "./birds.types";

const INITIAL_STATE = {
  extraScore: 5,
  random: null,
  answered: false,
  score: 0,
  birdsArray: null,
  currentBirdsArray: null,
  activeBird: null,
  questionBird: null,
  error: null,
  colorsArray: [],
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
    case birdsActionTypes.SET_RANDOM_VALUE:
      return {
        ...state,
        random: action.payload,
      };
    case birdsActionTypes.SET_ACTIVE_BIRD:
      return {
        ...state,
        activeBird: action.payload,
      };
    case birdsActionTypes.SET_QUESTION_BIRD:
      return {
        ...state,
        questionBird: action.payload,
      };
    case birdsActionTypes.SET_ANSWERED:
      return {
        ...state,
        answered: !state.answered,
      };
    case birdsActionTypes.INCREASE_SCORE:
      return {
        ...state,
        score: state.score + action.payload,
      };
    case birdsActionTypes.DECREASE_EXPTRA_SCORE:
      return {
        ...state,
        extraScore:
          state.extraScore >= 0 ? state.extraScore - 1 : state.extraScore,
      };
    case birdsActionTypes.RESET_EXTRA_SCORE:
      return {
        ...state,
        extraScore: 5,
      };
    case birdsActionTypes.RESET_ACTIVE_BIRD:
      return {
        ...state,
        activeBird: null,
      };
    case birdsActionTypes.FILL_COLORS_ARRAY:
      return {
        ...state,
        colorsArray: action.payload,
      };
    case birdsActionTypes.CHANGE_LIST_COLOR:
      return {
        ...state,
        colorsArray: state.colorsArray.map((color, index) =>
          index === action.payload.index
            ? (color = action.payload.color)
            : color
        ),
      };
    case birdsActionTypes.RESET_GAME:
      return {
        ...state,
        extraScore: 5,
        score: 0,
        answered: false,
        activeBird: null,
        questionBird: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default birdReducer;
