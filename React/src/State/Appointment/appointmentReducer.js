import * as ActionTypes from "../actionTypes";
const INITIAL_STATE = {
    appointments: [],
    appointment : {
        user : null,
        hospital: null,
        vaccine: null,
        date: Date.now()
    }
}

export default function AppointmentReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ActionTypes.ADDAPPOINTMENTS:
            return {...state, appointments: action.payload.appointments}
        default:
            return state;
    }
}
