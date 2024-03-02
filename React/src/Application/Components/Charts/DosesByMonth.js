import {Histogram} from '@ant-design/plots';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getAll } from '../../../State/Appointment/appointmentAction';
// I'll make sure to pass mod 12 month here
const DosesByMonth = ({month}) =>{
    const appointments = useSelector((state) => state.AppointmentReducer.appointments);
    console.log(appointments)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());
    }, [])
    let data = appointments.filter((a)=>new Date(a.date).getMonth()==month)
    .map(a=>{ return {doses:a.vaccine.doses, day:new Date(a.date).getDate()}})
    console.log(data)
    const config = {
        data,
        binField: 'day',
        channel: 'doses',
        binWidth: 1,
        meta:{
            x: {domainMin:0},
            y: {nice: true}
        },
        style: {
            inset: 0.5
        }
    }
    return (
        <>
        <h3>Doses By Day in Given month Histogram</h3>
        <Histogram {...config} />
        </>
        )

}
export default DosesByMonth