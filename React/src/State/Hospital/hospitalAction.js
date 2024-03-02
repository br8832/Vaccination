import * as ActionTypes from "../actionTypes";
import axios from 'axios';
export const addHospitals = (hospitals)=>({
    type:ActionTypes.ADDHOSPITALS, payload:{hospitals}
})
export const addCharge = (hospitals,id)=>({
    type:ActionTypes.ADDCHARGE, payload:{hospitals, id}
})
//each time you save it, getAll the objects
export const saveHospital = (hospital)=>{
    return function(dispatch){
        axios.post("http://localhost:9000/hospital/save", {hospital})
        .then(()=>dispatch(getAll()))
        .catch(e=>console.log(e.data))
    }
}
// // implement updateCharge in Express API
// export const updateCharge =(id, charges)=>{
//     return function(dispatch){
//         axios.post("http://localhost:9000/hospital/update",{id,charges})
//         .then(()=>dispatch(getAll()))
//         .catch(e=>console.log(e.data))
//     }
// }
export const getAll=()=>{
    return function (dispatch){
        axios.get("http://localhost:9000/hospital/get")
        .then((hospitals)=>dispatch(addHospitals(hospitals.data)))
        .catch(e=>console.log(e.data))
    }
}