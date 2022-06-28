import { combineReducers } from "redux";
import toursReducer from "./toursReducer";

const rootReducer = combineReducers({
  toursReducer,
});

export default rootReducer;
