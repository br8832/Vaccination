import React, { useEffect, Fragment} from "react";
import { useSelector} from "react-redux";
import { getAll as getAllA} from "../../../State/Appointment/appointmentAction";
import Appointment from "../Patient/Appointment"
import { useDispatch } from "react-redux";
let AllAppointments = () => {
    const appointmentsList = useSelector((state) => state.AppointmentReducer.appointments);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllA());
    }, [])
    //console.log(appointmentsList, user, hospitals)
// Instead of <></> use <Fragment></Fragment>
    return (
        <>
        {appointmentsList?.length>0 ? 
            <Fragment>
                <h1>All Appointments</h1>
                
                { appointmentsList && appointmentsList.length > 0 ?
                    appointmentsList.map((appointment) => {
                        return <Appointment parent="Admin" appointment={appointment} />
                    })
                
                : 
                <p></p>
                }
                    
            </Fragment>
            : <p>{"Please login to see this feature."}</p>
        }
        </>
    )
}


export default AllAppointments;