import birdsActionTypes from "./birds.types";

const INITIAL_STATE = {
  score: 0,
  level: 0,
  currentInfo: null,
  birdsInfo: null,
  birdsNames: {
    0: ["ворон", "журавль", "сорока", "козодой", "кукушка", "синица"],
    1: ["воробей", "грач", "галка", "певчий дрозд", "сорока", "сойка"],
    2: ["зяблик", "клёст", "горлица", "дятел", "удод", "стриж"],
    3: ["жаворонок", "соловей", "иволга", "свиристель", "скворец", "щегол"],
    4: ["орёл", "коршун", "лунь", "сокол", "ястреб", "филин"],
    5: ["альбатрос", "олуша", "буревестник", "пеликан", "пингвин", "чайка"],
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
    default:
      return {
        ...state,
      };
  }
};

export default birdReducer;
