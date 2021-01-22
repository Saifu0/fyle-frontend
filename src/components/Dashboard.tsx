import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import Searchbar from './Searchbar';
import { Row, Col} from 'antd';
import BankList from '../containers/BankList';

const Dashboard = () => {

    
    
    return (
        <div>
            <Row >
                <Col span={6}>
                    <h1 style={{ fontSize : "5vh"}}>Bank Branches</h1>
                </Col>

                <Col style={{ marginTop : 30}}>
                    <Link to="favorites">
                        Favorites
                    </Link>
                </Col>
            </Row>

            <Row style={{marginTop : 20}}>
                <Col span={12}>
                    <Dropdown/>
                </Col>
                <Col span={12}>
                    <Searchbar/>
                </Col>
            </Row>

            <Row>
                <BankList/>
            </Row>
        </div>
    )
}

export default Dashboard
