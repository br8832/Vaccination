import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { updateAppointmentPaid } from "../../../State/Appointment/appointmentAction";
import { useNavigate } from "react-router-dom";
//kinda like orders
let AppointmentComponent = ({appointment,parent}) => {
    const appointmentDate = appointment.date;
    const hospital = appointment.hospital;
    const vaccine = appointment.vaccine;
    const patient = appointment.user;
    const readableDate = new Date(appointmentDate);
    const timeElaspsed = Date.now() - new Date(appointmentDate)
    const Total = vaccine.price
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //has it passed the scheduledDate
    const handleClick = (app) => {
        dispatch(updateAppointmentPaid(app._id));
        navigate('/payment');
    }
    return (
        <>
            { parent=="Admin"|| timeElaspsed < 0 ? <Fragment>
                <table>
                    <thead>
                    <tr>
                        <th>Patient</th>
                        <th>Location</th>
                        <th>Time</th>
                        <th>Address</th>
                        <th>Type</th>
                        <th>Vaccine</th>
                        <th>Dose</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{patient.name}</td>
                        <td>{hospital.name}</td>
                        <td>{readableDate.toLocaleString()}</td>
                        <td>{hospital.address}</td>
                        <td>{hospital.type}</td>
                        <td>{vaccine.name}</td>
                        <td>{vaccine.doses}</td>
                        <td>{vaccine.price}</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
               
                </Fragment>
            : <p>Patient has been successfully vaccinated with <b>{vaccine.name}</b> on {readableDate.toLocaleString()}</p>
            }
        </>
    )
}

export default AppointmentComponent;