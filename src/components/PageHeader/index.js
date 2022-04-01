import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Menu, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import HistorySvg from '../../assets/logo/History.svg';
import CarSvg from '../../assets/logo/Car.svg';
import { logout } from '../../features/auth-slice';
import { userRoles } from '../../constans/common.js';

import './index.scss';

function PageHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const user = useSelector((state) => state.auth.user);

  const logOutHandler = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <Row>
      <Col span={6}>
        <Link to="/" className="header-logo">
          <div className="header-logo__car">
            <img className="logo-imgs" src={CarSvg} alt="Car" />
          </div>
          <div className="header-logo__history">
            <img className="logo-imgs" src={HistorySvg} alt="History" />
          </div>
        </Link>
      </Col>
      <Col span={8} offset={2}>
        <Menu className="menu" theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about-us">About Us</Link>
          </Menu.Item>
          {isAuthorized ? (
            <>
              <Menu.Item key="3">
                <Link to="/garage">Garage</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/profile">Profile</Link>
              </Menu.Item>
            </>
          ) : null}
          {isAuthorized && user.role === userRoles.admin ? (
            <>
              <Menu.Item key="5">
                <Link to="/users">Users</Link>
              </Menu.Item>
            </>
          ) : null}
        </Menu>
      </Col>
      <Col className="btns-wrapper" span={6} offset={2}>
        <div className="wrapper">
          {isAuthorized ? (
            <Button onClick={logOutHandler} className="btn-sign_up">
              Log out
            </Button>
          ) : (
            <>
              <Link to="/authorization">
                <Button>Sign In</Button>
              </Link>
              <Link to="/registration">
                <Button className="btn-sign_up">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default PageHeader;
