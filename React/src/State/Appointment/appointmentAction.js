import * as ActionTypes from "../actionTypes";
import axios from 'axios';
export const saveAppointment=(appointment)=>{
    return function (dispatch){
    axios.post("http://localhost:9000/appointment/save",{appointment})
    .then(()=>dispatch(getAll()))
    }
}

export const getAll = () =>{
    return function(dispatch){
        axios.get("http://localhost:9000/appointment/get")
        .then((apps)=>dispatch(addApointment(apps.data)))
        .catch(e=>console.log(e))
    }
}

export const updateAppointmentPaid = (id) =>{
    return function(dispatch){
        axios.post(`http://localhost:9000/appointment/update`,{id:id})
        .then((apps)=>dispatch(addApointment(apps.data)))
        .catch(e=>console.log(e))
    }
}

export const addApointment = (appointments)=>({
    type: ActionTypes.ADDAPPOINTMENTS, payload:{appointments}
})