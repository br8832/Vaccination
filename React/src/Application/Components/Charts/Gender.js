import React, { useEffect } from 'react';
import { Pie } from '@ant-design/plots';
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../../State/User/userAction";

const Gender = () => {
    const users = useSelector((state) => state.UserReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, [])

    const females = users.filter((user) => user.gender == 'female' || user.gender == 'Female');
    const males = users.filter((user) => user.gender == 'male' || user.gender == 'Male');

const data = [
    {
    type: 'Female',
    value: females.length/users.length,
    },
    {
    type: 'Male',
    value: males.length/users.length,
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
return (
    <>
    <h3>Gender Pie Chart</h3>
    <Pie {...config} />;
    </>
    )
};


export default Gender;