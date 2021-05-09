import { applyMiddleware, createStore, combineReducers } from "redux"
import thunk from "redux-thunk"
import companyReducer from "./reducers/companyReducer";
import customerReducer from './reducers/customerReducer'
import roleReducer from "./reducers/roleReducer";
import userReducer from './reducers/userReducer'

const rootReducers = combineReducers({
  user: userReducer,
  customer: customerReducer,
  role: roleReducer,
  company: companyReducer,  
});

const middlewareEnhancer = applyMiddleware(thunk);
let store = createStore(rootReducers, middlewareEnhancer)

export default store