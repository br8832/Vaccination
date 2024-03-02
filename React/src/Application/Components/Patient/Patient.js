import React, {Fragment,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import Age from "../Charts/Age";
import Gender from "../Charts/Gender";
import Disease from "../Charts/Disease";
import MedicalCert from "../Charts/MedicalCert";
import { getAll } from "../../../State/User/userAction";

export default function Patient(){
    const user = useSelector((state) => state.UserReducer.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());
    }, []) 
    return (
        <>
            {console.log(user)}
            { user&&user.name !== "" ?
            <Fragment>
                <NavLink to="/userAppointments" className="button">My Appointments</NavLink>
                <hr/>
                <h1>{"Patient Statistics"}</h1>
                <hr/>
                <Age/>
                <Gender/>
                <Disease/>
                <MedicalCert/>
            </Fragment>
            : 
            <p>Please login to see these features</p>
            }
        </>
    )

}

