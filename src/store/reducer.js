import { combineReducers } from "redux";
import covidReducer from "./covid/reducer";

const rootReducer = combineReducers({
    covidReducer,
})

export default rootReducer;