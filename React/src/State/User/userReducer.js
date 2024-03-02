import * as ActionTypes from "../actionTypes";
// generally are arrays in case need to interact with components
const INITIAL_STATE = {
    users: [],
    user : {
        _id: "65de060370d3956f779e438a",
        name: "Admin",
        password: "password",
        age: 20,
        profession: "profession",
        contact: 8181234567,
        address: "Earth",
        gender: "Male",
        disease: "COVID",
        medicalCert: "None"
      }
}

export default function UserReducer (state = INITIAL_STATE, action) {
    switch (action.type) {   
        case ActionTypes.ADDUSER :
            return {...state, users : action.payload.users}
        
        case ActionTypes.SIGNIN:
            console.log("made it here")
            return {...state, user: action.payload.user}

        case ActionTypes.SIGNOUT :
            return {...state, user:{name : "",
            password : "",
            age : 0,
            profession : "",
            contact : 0,
            address: "",
            gender: "",
            disease: "",
            medicalCert: "",
            _id: "",
            paid: false}};

        default:
            return state;
    }

}

