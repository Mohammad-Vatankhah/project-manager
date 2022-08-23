import { combineReducers } from "redux";

import authReducer from "./AuthReducers";
import companyReducer from "./CompanyReducers";
import projectReducer from "./ProjectReducer";

export const reducers = combineReducers({
  authReducer,
  companyReducer,
  projectReducer,
});
