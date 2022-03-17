import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Form, Input, Button } from 'antd';
import { registration } from '../../../../features/usersCreator.js';

import './index.scss';

function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    if (values.password === values.rePassword) {
      dispatch(registration(values)).then(() => navigate('/authorization'));
    }
  };

  const onSubmitFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row className="registration-form-wrapper">
      <Col className="registration-form">
        <Form
          name="basic"
          layout="vertical"
          autoComplete="off"
          onFinish={onSubmit}
          onFinishFailed={onSubmitFailed}>
          <Form.Item
            label="Username"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input size="large" placeholder="Enter username" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input size="large" placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password size="large" placeholder="Enter password" />
          </Form.Item>

          <Form.Item
            label="Repeat password"
            name="rePassword"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password size="large" placeholder="Repeat password" />
          </Form.Item>

          <Form.Item>
            <Button size="large" type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default RegistrationForm;
