import React from 'react';
import { TBankDetail } from '../store/Bank/@types';
import { Card, Col } from 'antd';

interface Props {
    bank : TBankDetail
}

const CustomCards = ( props : Props ) => {
    return (
        <Col span={6}>
             <Card bordered={false} style={{ width: 300, height: 350, marginTop : 20, marginLeft : 50 }}>
                <p><strong>IFSC: </strong>{props.bank.ifsc}</p>
                <p><strong>BRANCH: </strong>{props.bank.branch}</p>
                <p><strong>BANK ID: </strong>{props.bank.bank}</p>
                <p><strong>ADDRESS: </strong>{props.bank.address}</p>
                <p><strong>STATE: </strong>{props.bank.state}</p>
                <p><strong>CITY: </strong>{props.bank.city}</p>
            </Card>
        </Col>  
    )
}

export default CustomCards
