import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../../State/User/userAction";

let Header = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Reducer = useSelector(state=>state.UserReducer)

    let logout = (e) => {
        console.log(Reducer)
        dispatch(signOutUser());
        navigate('/user');
        e.preventDefault()
    }

    return (
        <>
        
            <h1>Vaccination Application</h1>
            <NavLink to="/admin" className="button" activeclassname="success">Admin Section</NavLink>
            <NavLink to="/patient" className="button" activeclassname="success">Patient Section</NavLink>
            <NavLink to="/user" className="button" activeclassname="success">Login</NavLink>
            <button onClick={logout}>Logout</button>
        </>
    )

}

export default Header;