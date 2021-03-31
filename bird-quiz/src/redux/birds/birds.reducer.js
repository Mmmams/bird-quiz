import birdsActionTypes from "./birds.types";

const INITIAL_STATE = {
  score: 0,
  level: 0,
  currentInfo: null,
  birdsInfo: null,
  birdsNames: {
    0: ["ворон", "журавль", "сорока", "козодой", "кукушка", "синица"],
    1: ["воробей", "грач", "галка", "певчий дрозд", "сорока", "сойка"],
    2: ["зяблик", "клёст", "горлица", "дятел", "удод"],
    3: ["соловей", "скворец", "щегол"],
    4: ["коршун", "лунь", "сокол", "ястреб", "филин"],
    5: ["олуша", "буревестник", "пеликан", "пингвин", "чайка"],
  },
  currentName: ["ворон", "журавль", "сорока", "козодой", "кукушка", "синица"],
};

const birdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case birdsActionTypes.FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        birdsInfo: action.payload,
      };
    case birdsActionTypes.CHOOSE_CURRENT_LIST:
      return {
        ...state,
        currentInfo: state.birdsInfo[action.payload],
      };
    case birdsActionTypes.GO_NEXT_LEVEL_SUCCESS:
      return {
        ...state,
        birdsInfo: action.payload,
      };
    case birdsActionTypes.CLEAN_BIRD_INFO:
      return {
        ...state,
        birdsInfo: action.payload,
      };
    case birdsActionTypes.CHANGE_NAME_LIST:
      return {
        ...state,
        currentName: state.birdsNames[action.payload + 1],
      };
    case birdsActionTypes.INCREASE_LEVEL:
      return {
        ...state,
        level: state.level + 1,
      };
    case birdsActionTypes.INCREASE_SCORE:
      return {
        ...state,
        score: state.score + action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default birdReducer;
