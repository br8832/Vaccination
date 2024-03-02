import React, { useEffect } from 'react';
import { Column } from '@ant-design/plots';
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../../State/User/userAction";

const Age = () => {
    const users = useSelector((state) => state.UserReducer.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());
    }, [])

    //console.log("users: ", users);
    const usersUnder16 = users.filter((user) => user.age < 16);
    const users16To25 = users.filter((user) => user.age > 16 && user.age < 26);
    const users26To50 = users.filter((user) => user.age > 25 && user.age < 50);
    const users51To75 = users.filter((user) => user.age > 50 && user.age < 76);
    const usersAbove75 = users.filter((user) => user.age > 75);

const data = [
    {
    age: 'under 16 years',
    patients: usersUnder16.length,
    },
    {
    age: '16-25 years',
    patients: users16To25.length,
    },
    {
    age: '26-50 years',
    patients: users26To50.length,
    },
    {
    age: '51-75 years',
    patients: users51To75.length,
    },
    {
    age: 'above 75 years',
    patients: usersAbove75.length,
    },
];
const config = {
    data,
    xField: 'age',
    yField: 'patients',
    label: {
    style: {
        fill: '#FFFFFF',
        opacity: 0.6,
    },
    },
    xAxis: {
    label: {
        autoHide: true,
        autoRotate: false,
    },
    },
    meta: {
    age: {
        alias: 'Age',
    },
    patients: {
        alias: 'Patients',
    },
    },
};
return (
    <>
    <h3>Age Chart</h3>
    <Column {...config} />
    </>
    );
};

export default Age;