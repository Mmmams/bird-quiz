import { combineReducers } from "redux";

import birdReducer from "./birds/birds.reducer";

const rootReducer = combineReducers({
  birds: birdReducer,
});
export default rootReducer;
