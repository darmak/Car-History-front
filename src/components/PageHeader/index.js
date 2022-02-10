import React from 'react';
import HistorySvg from '../../assets/logo/History.svg';
import CarSvg from '../../assets/logo/Car.svg';
import { Row, Col, Menu } from 'antd';
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
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Col>
            <Col span={6} offset={2}>
                <p>AAAAA</p>
            </Col>
        </Row>
  )
}


{/* <div className="header-logo">
            <div className="header-logo__car">
                <img className="logo-imgs" src={CarSvg} alt="Car"/>
            </div>
            <div className="header-logo__history">
                <img className="logo-imgs" src={HistorySvg} alt="History"/>
            </div>
        </div>
        <nav className="header-nav-list">
            <div className="header-nav-list__item">
                <a href="" className="header-nav__link"><span>Item</span></a>
            </div>
            <div className="header-nav-list__item">
                <a href="" className="header-nav__link"><span>Item</span></a>
            </div>
            <div className="header-nav-list__item">
                <a href="" className="header-nav__link"><span>Item</span></a>
            </div>
            <div className="header-nav-list__item">
                <a href="" className="header-nav__link"><span>Item</span></a>
            </div>
            <div className="header-nav-list__item">
                <a href="" className="header-nav__link"><span>Item</span></a>
            </div>
        </nav>
        <div className="header-btns-wrapper">
            <div className="header-btns__sign-in">
                <button className="header-btns">Sign In</button>
            </div>
            <div className="header-btns__sign-up">
                <button className="header-btns">Sign Up</button>
            </div>
        </div> */}


export default PageHeader;