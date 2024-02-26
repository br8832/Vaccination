import * as ActionTypes from "../actionTypes";
// generally are arrays in case need to interact with components
const INITIAL_STATE = {
    users: [],
    user : {
        name : "user name",
        password : "user password",
        age : 0,
        profession : "user profession",
        contact : 0,
        address: "user address",
        gender: "user gender",
        disease: "user disease",
        medicalCert: "user medicalCert",
        _id: "Object@185r0f482ht2400bwb",
    }
}

export default function UserReducer (state = INITIAL_STATE, action) {
    switch (action.type) {   
        case ActionTypes.ADDUSER :
            return {...state, users : action.payload.users}
        
        case ActionTypes.SIGNIN:
            return {...state, user: action.payload.user}

        case ActionTypes.SIGNOUT :
            return INITIAL_STATE;

        default:
            return state;
    }

}

