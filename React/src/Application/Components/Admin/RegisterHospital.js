import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveHospital } from "../../../State/Hospital/hospitalAction";

let RegisterHospital = () => {
    const hospital = useSelector((state) => state.HospitalReducer.hospital);
    const dispatch = useDispatch();
    const [name, setName] = useState(hospital.name);
    const [address, setAddress] = useState(hospital.address);
    const [type, setType] = useState(hospital.type);
    const [charges, setCharges] = useState(hospital.charges);
    let save = (e) => {
        let hos = {name, address, type, charges}
        alert("We are going to save this hospital - "+ JSON.stringify(hos));
        dispatch(saveHospital(hos))
        e.preventDefault();
    }
    return (
        <>
            <h2>Register a Hospital</h2>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <strong>Hospital Name</strong>
                        <input type="text" className="form-control col-md-6" value={name} maxLength={50}
                            onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="col-md-12">
                        <strong>Address</strong>
                        <input type="text" className="form-control col-md-6" value={address} maxLength={100}
                            onChange={(e)=>setAddress(e.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <strong>Type</strong>
                        <select value={type} onChange={(e=>setType(e.target.value))}>
                            <option value="government">Government</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <strong>Charges</strong>
                        <input type="number" className="form-control col-md-6" value={charges} maxLength={5}
                            onChange={(e)=>setCharges(e.target.value)}
                        />
                    </div>
                        <input type="button" className={"form-control btn btn-primary col-md-3"} 
                            value={"Save Hospital"} 
                            onClick={save}/>
                    </div>
            </section>
        </>
    )


}
export default RegisterHospital;