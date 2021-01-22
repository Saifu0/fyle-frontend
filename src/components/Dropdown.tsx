import React from 'react';
import { useDispatch } from 'react-redux';
import { setDropdownOption } from '../store';
import { Select } from 'antd';

const { Option } = Select;

const Dropdown = () => {

    const dispatch = useDispatch();

    const handleChange = (value : string) => {
        dispatch(setDropdownOption(value));
    }

    return (
        <Select defaultValue="bangalore" style={{ width: 120 }} onChange={handleChange}>
            <Option value="bangalore">Bangalore</Option>
            <Option value="mumbai">Mumbai</Option>
            <Option value="new delhi">New Delhi</Option>
            <Option value="lucknow">Lucknow</Option>
            <Option value="hyderabad">Hyderabad</Option>
        </Select>
    )
}

export default Dropdown
