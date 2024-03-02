import React, {Fragment, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Hospital from "./Hospital";
import {getAll} from "../../../State/Hospital/hospitalAction"; 

let HospitalsComponent = () => {
    const hospitals = useSelector((state) => state.HospitalReducer.hospitals);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAll());
    }, [])
    return (
        <>
        <h2>Hospitals</h2>
        {console.log(hospitals)}
        { hospitals && hospitals.length > 0 ? 
            <Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            hospitals.map(hospital =>{
                            return <tr><Hospital hospital={hospital} key={hospital._id} /></tr>
                            })
                        }
                    </tbody>
                </table>
            </Fragment>
            : "There are currently no hospitals"
        }
        </>
    )
}

export default HospitalsComponent;