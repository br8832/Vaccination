import * as ActionTypes from "../actionTypes";

export const saveAppointment=(appointment)=>{
    axios.post("http://localhost:9000/appointment/save")
    .then((appointments)=>dispatch(getAll()))
}

export const getAll = () =>{
    return function(dispatch){
        axios.get("http://localhost:9000/appointment/get")
        .then(()=>dispatch(addApointment()))
        .catch(e=>console.log(e))
    }
}

export const addApointment = (appointments)=>({
    type: ActionTypes.ADDAPPOINTMENTS, payload:{appointments}
})