import React, { useState, useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import {saveAppointment} from "../../../State/Appointment/appointmentAction"
import {getAll as getAllH} from "../../../State/Hospital/hospitalAction"
import {getAll as getAllU}  from "../../../State/User/userAction"
import {getAll as getAllV} from "../../../State/Vaccine/vaccineAction"
import Datetime from 'react-datetime';
import { useNavigate } from "react-router-dom";

let AppointmentApprover = () => {
    const userList = useSelector((state) => state.UserReducer.users);
    const hospitalList = useSelector((state) => state.HospitalReducer.hospitals);
    const vaccineList = useSelector((state) => state.VaccineReducer.vaccines);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllU());
        dispatch(getAllH());
        dispatch(getAllV());
    }, [])
    const [userid, setUserId] = useState("user id");
    const [hospitalid, setHospitalId] = useState("hospital id");
    const [vaccineid, setVaccineId] = useState("vaccine id");
    const [date, setDate] = useState("");
    let nav = useNavigate()
    let save = (evt) => {
        //alernatively
        let user;
        user = userList.filter((u)=>u._id==userid)[0]
        console.log(user)
        for(let i = 0; i < userList.length; i++) {
            if(userList[i]._id === userid) {
                user = userList[i];
            }
        }
        console.log(user)
        let hospital;
        for(let i = 0; i < hospitalList.length; i++) {
            if(hospitalList[i]._id === hospitalid) {
                hospital = hospitalList[i];
            }
        }

        let vaccine;
        for(let i = 0; i < vaccineList.length; i++) {
            if(vaccineList[i]._id === vaccineid) {
                vaccine = vaccineList[i];
            }
        }
        const appointment = {
            user, hospital, vaccine,
            date: date, paid: false
        }
        alert("We are going to save this appointment - "+ JSON.stringify(appointment));
        dispatch(saveAppointment(appointment));
        nav("/allAppointments")
        evt.preventDefault();
    }

    return (
        <>
        <h2>Appointment Approver Screen</h2>
        <b>User</b>
        <select value={userid} onChange={(e)=>setUserId(e.target.value)}>
            <option value={"dummyid"}>Choose a User</option>
            {userList.map((user) => (
            <option value={user._id}>{user.name}</option>
            ))}
        </select>
        <b>Hospital</b>
        <select value={hospitalid} onChange={(e)=>setHospitalId(e.target.value)}>
            <option value={"dummyid"}>Choose a Hospital</option>
            {hospitalList.map((hospital) => (
            <option value={hospital._id}>{hospital.name}</option>
            ))}
        </select>
        <b>Vaccine</b>
        <select value={vaccineid} onChange={(e)=>setVaccineId(e.target.value)}>
            <option value={"dummyid"}>Choose a Vaccine</option>
            {vaccineList.map((vaccine) => (
            <option value={vaccine._id}>{vaccine.name}</option>
            ))}
        </select>
        <b>Select Date and Time</b>
        <Datetime format="dd-MMM-yy hh:mm a" locale='en' onChange={(date)=>setDate(date)}/>
        <input type="button" className={"form-control btn btn-primary col-md-3"} 
            value={"Save Appointment"} 
            onClick={save}/>
        </>
    )
}

export default AppointmentApprover;