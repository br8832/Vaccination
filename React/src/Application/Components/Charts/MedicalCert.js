import React, { useEffect } from 'react';
import { Pie } from '@ant-design/plots';
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../../State/User/userAction";

const MedicalCert = () => {
    const users = useSelector((state) => state.UserReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, [])

    const medicalCertUsers = users.filter((user) => "none".localeCompare(user.medicalCert,'en',{sensitivity:"base"})!=0 && user.medicalCert !== 'N/A');
    const nonMedicalCertUsers = users.filter((user) => user.medicalCert == 'none' || user.medicalCert == 'None' || user.medicalCert == 'N/A');
    console.log(medicalCertUsers, nonMedicalCertUsers)

const data = [
    {
    type: 'Possesses a Medical Certification',
    value: medicalCertUsers.length,
    },
    {
    type: 'Does Not Possess a Medical Certification',
    value: nonMedicalCertUsers.length,
    }
];
const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
    offset: '-30%',
    content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    style: {
        fontSize: 14,
        textAlign: 'center',
    },
    },
    interactions: [
    {
        type: 'element-active',
    },
    ],
};
console.log(config)
return (
    <>
    <h3>Medical Certification Pie Chart</h3>
    <Pie {...config} />;
    </>
    )
};


export default MedicalCert;