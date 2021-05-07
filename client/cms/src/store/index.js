import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import reducer from '../store/reducers/reducer'

let store = createStore(reducer, applyMiddleware(thunk))

export default store