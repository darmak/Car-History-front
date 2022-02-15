import React from 'react';
import HistorySvg from '../../assets/logo/History.svg';
import CarSvg from '../../assets/logo/Car.svg';
import { Row, Col, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

const PageHeader = () => {
    return (
        <Row>
            <Col span={6}>
                <Link to="/" className="header-logo">
                    <div className="header-logo__car">
                        <img className="logo-imgs" src={CarSvg} alt="Car"/>
                    </div>
                    <div className="header-logo__history">
                        <img className="logo-imgs" src={HistorySvg} alt="History"/>
                    </div>
                </Link>
            </Col>
            <Col span={8} offset={2}>
                {/* defaultSelectedKeys={['1']} */}
            <Menu className='menu' theme="light" mode="horizontal"> 
                <Link to="/garage" className="nav-link">
                    <Menu.Item key="1">Garage</Menu.Item>
                </Link>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Col>
            <Col className="btns-wrapper" span={6} offset={2}>
                <div className="wrapper">
                    <Link to="/authorization">
                        <Button>Sign In</Button>
                    </Link>
                    <Link to="/registration">
                        <Button className="btn-sign_up">Sign Up</Button>
                    </Link>
                </div>
            </Col>
        </Row>
  )
}

export default PageHeader;