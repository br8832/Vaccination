import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {saveVaccine} from "../../../State/Vaccine/vaccineAction"

let RegisterVaccine = () => {
    const vaccine = useSelector((state) => state.VaccineReducer.vaccine)
    const dispatch = useDispatch();
    const [name, setName] = useState(vaccine.name);
    const [price, setPrice] = useState(vaccine.price);
    const [type, setType] = useState(vaccine.type);
    const [sideEffects, setSideEffects] = useState(vaccine.sideEffects);
    const [origin, setOrigin] = useState(vaccine.origin);
    const [doses, setDoses] = useState(vaccine.doses);
    const [otherInfo, setOtherInfo] = useState(vaccine.otherInfo);

    let save = (e) => {
        let vac = {name, price, type, sideEffects, origin, doses, otherInfo};
        alert("We are going to save this vaccine - "+ JSON.stringify(vac));
        dispatch(saveVaccine(vac));
        e.preventDefault();
    }
    return (
        <>
        <h2>Register a Vaccine</h2>
        <section className={"componentClass"}>
            <div className="form col-md-8">
                <div className="col-md-12">
                    <strong>Vaccine Name</strong>
                    <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                        placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="col-md-12">
                    <strong>Price </strong>
                    <input type="number" className="form-control col-md-6" value={price} 
                    placeholder="Price" onChange={(e)=>setPrice(e.target.value)} />
                </div>
                <div className="col-md-12">
                    <strong>Type </strong>
                <input type="text" className="form-control col-md-6" value={type} 
                    placeholder="Type" onChange={(e)=>setType(e.target.value)} />
                </div>
                <div className="col-md-12">
                    <strong>Side Effects </strong>
                    <textarea value={sideEffects} maxLength={255} rows="5" cols="30"
                        placeholder="Side Effects" onChange={(e) => setSideEffects(e.target.value)}
                    ></textarea>
                </div>
                <div className="col-md-12">
                    <strong>Origin</strong>
                <input type="text" className="form-control col-md-6" value={origin} 
                    placeholder="Origin" onChange={(e)=>setOrigin(e.target.value)} />
                </div>
                <div className="col-md-12">
                    <strong>Doses Required </strong>
                    <input type="number" className="form-control col-md-6" value={doses} 
                    placeholder="Doses Required" onChange={(e)=>setDoses(e.target.value)} />
                </div>
                <div className="col-md-12">
                    <strong>Other Info</strong>
                    <textarea value={otherInfo} maxLength={255} rows="5" cols="30"
                        placeholder="Anything else?" onChange={(e) => setOtherInfo(e.target.value)}
                    ></textarea>
                </div>
                    <input type="button" className={"form-control btn btn-primary col-md-3"} 
                        value={"Save Vaccine"} onClick={save}/>
                </div>
            </section>
        </>
    )
}
export default RegisterVaccine;