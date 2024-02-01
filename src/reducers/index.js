import {combineReducers} from "redux";
import { TaskReducer } from "./taskReducers";

export const Reducer=combineReducers({
    task:TaskReducer,});