import { combineReducers } from "redux";

import birdReducer from "./birds/birds.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  birds: birdReducer,
  user: userReducer,
});
export default rootReducer;
