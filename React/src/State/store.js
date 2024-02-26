//redux - 
//1. store - <centralized data source for react app combination of multiple states>
//2. action - <object that contains (actionType-what to do to product) and payload(productitself in json)>
//3. action creator -
//4. reducer/callback - <initialize states and create functions to create new state, upon actions>
//5. dispatch -
import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import {thunk} from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async
import VaccineReducer from "./Vaccine/vaccineReducer";
import HospitalReducer from "./Hospital/hospitalReducer";
import UserReducer from "./User/userReducer";
import AppointmentReducer from "./Appointment/appointmentReducer";

const rootReducer = combineReducers({
    HospitalReducer,
    AppointmentReducer,
    UserReducer,
    VaccineReducer
})
const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default(), thunk] :
  [thunk];
  export default configureStore(
    {reducer : rootReducer},{},
    applyMiddleware(...middleware)
)