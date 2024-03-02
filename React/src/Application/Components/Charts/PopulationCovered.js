import {Pie} from '@ant-design/plots';
import { useDispatch } from 'react-redux';
import { getAll } from '../../../State/User/userAction';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
const PoplationCovered = () => {
    const totalPop = 90000000000
    const users = useSelector((state) => state.UserReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAll());
    }, [])

const data = [
    {
    type: 'Population Covered',
    value: users.length
    },
    {
    type: 'Not covered',
    value: totalPop - users.length
    }
]
const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    label: {
    offset: '-70%',
    content: ({ value }) => `${(value/totalPop * 100).toFixed(0)}%`,
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
//console.log(config)
return (
    <>
    <h3>Population Covered Pie Chart</h3>
    <Pie {...config} />;
    </>
    )
}
export default PoplationCovered;