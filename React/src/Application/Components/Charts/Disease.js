import React, { useEffect } from 'react';
import { Pie } from '@ant-design/plots';
import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../../State/User/userAction";

const Disease = () => {
    const users = useSelector((state) => state.UserReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, [])

    const diseaseUsers = users.filter((user) => user.disease !== 'none' && user.disease !== 'None');
    const nonDiseaseUsers = users.filter((user) => user.disease == 'none' || user.disease == 'None');
const data = [
    {
    type: 'Pre-Existing Disease',
    value: diseaseUsers.length,
    },
    {
    type: 'No Pre-Existing Disease',
    value: nonDiseaseUsers.length,
    }
];
const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
        offset: "-50%",
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
    <h3>Disease Pie Chart</h3>
    <Pie {...config} />
    </>
    )
};


export default Disease;