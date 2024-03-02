import * as ActionTypes from "../actionTypes";
import axios from 'axios';
export const addUser = (users) => ({
    type: ActionTypes.ADDUSER,
    payload: {users}
})

export const signInUser = (user) => ({
    type: ActionTypes.SIGNIN,
    payload: {user}
})

export const signOutUser = () => ({
    type: ActionTypes.SIGNOUT
})
//implement in rest
// export const updatePaid = (id) =>{
//     return function(dispatch){
//         axios.post("http://localhost:9000/user/paid",{id})
//         .then(()=>dispatch(getAll()))
//         .catch(e=>console.log(e.data))
//     }
// }
export const logIn =(user)=>{
    return function(dispatch){
    axios.post("http://localhost:9000/user/signin",{user})
    .then((user)=>{
        dispatch(getAll())
        dispatch(signInUser(user.data))
    })
    .catch(e=>console.log(e.data))
}
}
export const getAll = () =>{
    return function(dispatch){
        axios.get("http://localhost:9000/user/get")
        .then((user)=>dispatch(addUser(user.data)))
        .catch(e=>console.log(e.data))
    }
}
