import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, setFavorites } from '../store';
import { TBankDetail } from '../store/Bank/@types';
import { Card, Col, Button } from 'antd';

interface Props {
    bank : TBankDetail
}

const CustomCards = ( props : Props ) => {

    const { favorites } = useSelector((state : any) => state.banks);
    const dispatch = useDispatch();

    const handleClick = () => {
        const favoriteStored = localStorage.getItem("favorites");

        if(favoriteStored && JSON.parse(favoriteStored)!==favorites){
            dispatch(setFavorites(JSON.parse(favoriteStored)));
        }

        dispatch(addToFavorite(props.bank));
    }

    

    return (
        <Col span={6}>
             <Card bordered={false} style={{ width: 300, height: 350, marginTop : 20, marginLeft : 50 }}>
                <p><strong>IFSC: </strong>{props.bank.ifsc}</p>
                <p><strong>BRANCH: </strong>{props.bank.branch}</p>
                <p><strong>BANK ID: </strong>{props.bank.bank}</p>
                <p><strong>ADDRESS: </strong>{props.bank.address}</p>
                <p><strong>STATE: </strong>{props.bank.state}</p>
                <p><strong>CITY: </strong>{props.bank.city}</p>
                <Button onClick={handleClick}>Add to favorite</Button>
            </Card>
        </Col>  
    )
}

export default CustomCards
