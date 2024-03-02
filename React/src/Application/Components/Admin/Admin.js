import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

let Admin = () => {
    const user = useSelector((state) => state.UserReducer.user);
    console.log("user.name: ", user.name);
    return (
        <>
        { user.name === 'Admin' ? 
        <Fragment>
            <div>
                <hr/>
                <NavLink to="/registerVaccine" className="button">Register a Vaccine</NavLink>
                <NavLink to="/hospital" className="button">Hospitals</NavLink>
                <NavLink to="/registerHospital" className="button" >Register a Hospital</NavLink>
                <NavLink to="/appointmentApprover" className="button" >Schedule Appointment</NavLink>
            </div>
        </Fragment>
        : <p>You must be Admin to access this page</p>
        } 
        </>
    )
}

export default Admin;