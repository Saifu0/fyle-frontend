import React from 'react';
import { useDispatch } from 'react-redux';
import { setParams } from '../store';

const Searchbar = () => {

    const dispatch = useDispatch();

    return (
        <input 
            type="text" 
            placeholder=" Search across all fields..."
            style={{ borderRadius : 10, border : "1px solid white", padding : 5, fontSize : 17, backgroundColor : 'black'}}
            onChange={(event : any) => 
                setTimeout(() => {
                    dispatch(setParams(event.target.value))
                },3000)
            }
        />
    )
}

export default Searchbar
