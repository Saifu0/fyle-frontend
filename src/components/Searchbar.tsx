import React, { useState } from 'react';
import { Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { setParams } from '../store';

const Searchbar = () => {

    const dispatch = useDispatch();
    const [typed, setTyped ] = useState("idle");

    const handleChange = ( event : any) => {
        setTyped("typing");
        setTimeout(() => {
            dispatch(setParams(event.target.value.toLowerCase()));
            setTyped("idle");
        },4000)
    }

    return (
        <>
            {typed==="idle" ? "" : <Spin style={{marginRight : 10}}/>}
            <input 
                type="text" 
                placeholder=" Search across all fields..."
                style={{ borderRadius : 10, border : "1px solid white", padding : 5, fontSize : 17, backgroundColor : 'black'}}
                onChange={(event : any) => handleChange(event)}
            />
        </>
    )
}

export default Searchbar
