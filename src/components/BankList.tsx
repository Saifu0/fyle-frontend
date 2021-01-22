import React from 'react';
import { TBankDetail } from '../store/Bank/@types';
import CustomCards from './CustomCards';
import { Row, Spin } from 'antd';
import { useSelector } from 'react-redux';

const BankList = ( props : any ) => {

    const { isLoading } = useSelector((state : any) => state.banks);

    return (
        <Row>
            {isLoading ? 
            <Spin 
                size="large"
                style={{
                    marginLeft : 800,
                    marginTop : 350
                }}
            /> : 
            props.data && props.data.map((bank : TBankDetail, index : number) => <CustomCards key={index} bank={bank}/>)}
        </Row>
    )
}

export default BankList
