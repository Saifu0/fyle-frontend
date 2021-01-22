import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setFavorites } from '../store';
import { Row, Card, Col, Button } from 'antd';

const Favorites = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const favorites = localStorage.getItem("favorites");

    const handleClick = () => {
        localStorage.removeItem("favorites");
        dispatch(setFavorites([]));
        history.push("/");
    }

    return (
        <div>
            <Link to="/">
                Back
            </Link>

            <h1>
                All Favorites - <Button onClick={handleClick}>Clear favorites</Button>
            </h1>
            <Row>
                {favorites && JSON.parse(favorites).map((bank : any, index : number) => {
                    return (
                        <Col span={6} key={index}>
                            <Card bordered={false} style={{ width: 300, height: 350, marginTop : 20, marginLeft : 50 }}>
                                <p><strong>IFSC: </strong>{bank.ifsc}</p>
                                <p><strong>BRANCH: </strong>{bank.branch}</p>
                                <p><strong>BANK ID: </strong>{bank.bank}</p>
                                <p><strong>ADDRESS: </strong>{bank.address}</p>
                                <p><strong>STATE: </strong>{bank.state}</p>
                                <p><strong>CITY: </strong>{bank.city}</p>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    )
}

export default Favorites
