import * as ActionTypes from "../actionTypes";
import axios from "axios"
export const saveVaccine = (vaccine)=>{
    return function(dispatch){
        axios.post("http://localhost:9000/vaccine/save",{vaccine})
        .then((vacs)=>{
            console.log(vacs)
            dispatch(getAll())
        })
        .catch(e=>console.log("Error in saving Vacs",e.data))
    }
}
export const getAll =()=>{
    return function(dispatch){
        axios.get("http://localhost:9000/vaccine/get")
        //vaccines.data like products is an array
        .then((vaccines)=>dispatch(AddVacine(vaccines.data)))
        .catch(e=>console.log(e.data))
    }
}

export const AddVacine = (vaccines)=>({
    type:ActionTypes.ADDVACINES,
    payload: {vaccines}
})