import { combineReducers } from "redux";
import { candidateReducer } from "./candidates";

const reducersObj = {
    candidateReducer,
};

export default combineReducers(reducersObj);
