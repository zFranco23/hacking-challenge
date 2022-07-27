import { combineReducers } from "redux";
import { authReducer } from "../modules/auth/duck";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
