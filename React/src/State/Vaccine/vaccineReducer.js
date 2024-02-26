import * as ActionTypes from "../actionTypes";
// following products
const INITIAL_STATE = {
    vaccines: [],
    vaccine : {
        name: "name",
        price: 0,
        type: "type",
        sideEffects: "sideEffects",
        origin: "origin",
        doses: 0,
        otherInfo: "otherInfo"
    }
}
export default function VaccineReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        
        case ActionTypes.ADDVACINES:            
            return {...state, vaccines:action.payload.vaccines};
        default:
            return state;
    }
} 