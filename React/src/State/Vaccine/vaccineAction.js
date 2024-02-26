import * as ActionTypes from "../actionTypes";
import axios from "axios"
export const saveVaccines = (vaccines)=>{
    return function(dispatch){
        axios.post("http://localhost:9000/vaccine/save",{vaccines})
        .then((vacs)=>{
            console.log(vacs)
            dispatch(AddVacine(vacs))
        })
        .catch(e=>console.log("Error in saving Vacs",e.data))
    }
}
export const getAll =()=>{
    return function(dispatch){
        axios.get("http://localhost:9000/user/get")
        //vaccines.data like products is an array
        .then((vaccines)=>dispatch(AddVacine(vaccines.data)))
        .catch(e=>console.log(e.data))
    }
}

export const AddVacine = (vaccines)=>({
    type:ActionTypes.ADDVACINES,
    payload: {vaccines}
})