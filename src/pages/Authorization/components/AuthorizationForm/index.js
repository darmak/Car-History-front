import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, Input, Button } from 'antd';
import { login } from '../../../../features/usersCreator.js';
import { authorizationRoute } from '../../../../features/users-slice.js';

import './index.scss';

function AuthorizationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const onFinish = (values) => {
    dispatch(login({ email: values.email, password: values.password })).then((res) => {
      localStorage.setItem('token', res.payload.token);
      dispatch(authorizationRoute());
      navigate('/');
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row className="authorization-form-wrapper">
      <Col className="authorization-form">
        <Form
          name="basic"
          layout="vertical"
          autoComplete="off"
          initialValues={{ email: user.email }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input value={user.email} size="large" placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password size="large" placeholder="Enter password" />
          </Form.Item>

          <Form.Item>
            <Button size="large" type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default AuthorizationForm;
