import React, { useEffect, Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAll as getAllA} from "../../../State/Appointment/appointmentAction";
import Appointment from "./Appointment";
import { useNavigate } from "react-router-dom";
import { getAll as getAllH} from "../../../State/Hospital/hospitalAction";
import { getAll as getAllU } from "../../../State/User/userAction";


let UserAppointments = () => {
    const appointmentsList = useSelector((state) => state.AppointmentReducer.appointments);
    const user = useSelector((state) => state.UserReducer.user);
    // const hospitals = useSelector((state)=> state.HospitalReducer.hospitals);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllA());
        dispatch(getAllH());
        dispatch(getAllU())
    }, [])
    //console.log(appointmentsList, user, hospitals)
    //console.log(JSON.stringify(appointmentsList))
    const userAppointments = appointmentsList.filter((appointment) => appointment.user.name === user.name);
   

// Instead of <></> use <Fragment></Fragment>
    return (
        <>
        {user.name ?
            <Fragment>
                <h1>{`${user.name}'s Appointments`}</h1>
                { userAppointments && userAppointments.length > 0 ?
                    userAppointments.map((appointment) => {
                        return <Appointment parent="User" appointment={appointment} />
                    })
                : 
                <p>You are not currently scheduled for any appointments</p>
                }
                
            </Fragment>
            : <p>{"Please login to see this feature."}</p>
        }
        </>
    )
}


export default UserAppointments;