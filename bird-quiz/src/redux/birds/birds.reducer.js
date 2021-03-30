import birdsActionTypes from "./birds.types";

const INITIAL_STATE = {
  currentInfo: null,
  birdsInfo: null,
  birdsNames: {
    first: ["ворон", "журавль", "сорока", "козодой", "кукушка", "синица"],
    second: ["воробей", "грач", "галка", "певчий дрозд", "сорока", "сойка"],
    third: ["зяблик", "клёст", "горлица", "дятел", "удод", "стриж"],
    four: ["жаворонок", "соловей", "иволга", "свиристель", "скворец", "щегол"],
    five: ["орёл", "коршун", "лунь", "сокол", "ястреб", "филин"],
    six: ["альбатрос", "олуша", "буревестник", "пеликан", "пингвин", "чайка"],
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
        currentInfo: state.birdsNames.first[action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default birdReducer;
