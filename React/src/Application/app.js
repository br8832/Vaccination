import React, {PureComponent } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./app.css";
import "react-datetime/css/react-datetime.css";
import Header from "./Components/Global/Header";
import Footer from "./Components/Global/Footer";
import Register from "./Components/Patient/Register";
import Payment from "./Components/Patient/Payment";
import UserAppointments from "./Components/Patient/userAppointments";
import Admin from "./Components/Admin/Admin";
import AppointmentApprover from "./Components/Admin/AppointmentApprover";
import RegisterVaccine from "./Components/Admin/RegisterVaccine";
import RegisterHospital from "./Components/Admin/RegisterHospital";
import Hospitals from "./Components/Admin/Hospitals";
import Patient from "./Components/Patient/Patient";
import AllAppointments from "./Components/Admin/AllAppointments";
export default class ApplicationComponent extends PureComponent {
    constructor(props){ 
        super(props)
    }
    //<Route path="/" element={<Home userName={"Jonathan"}/>}/>
    render(){ 
        return(
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Register />} />  
                    <Route path="/user" element={<Register />} />
                    <Route path="/admin" element={<Admin />} />  
                    <Route path="/user" element={<Register />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/userAppointments" element={<UserAppointments />} />
                    <Route path="/allAppointments" element={<AllAppointments />} />
                    <Route path="/appointmentApprover" element={<AppointmentApprover />} />
                    <Route path="/hospital" element={<Hospitals />} />
                    <Route path="/patient" element={<Patient />} /> 
                    <Route path="/registerVaccine" element={<RegisterVaccine />} />
                    <Route path="/registerHospital" element={<RegisterHospital />} />
                </Routes>
                <Footer />
            </Router>
        )
    }
}