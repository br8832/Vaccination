import * as ActionTypes from "../actionTypes";
const INITIAL_STATE = {
    hospitals: [],
    hospital: {
        name: "hospital name",
        address: "Earth",
        type: "Government",
        charges: 0
    }
}
export default function HospitalReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ActionTypes.ADDHOSPITALS:
            return {...state, hospitals:action.payload.hospitals}
        default: 
            return state;
    }
}
