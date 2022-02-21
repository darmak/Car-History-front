import React from 'react';
import './index.scss';
import { Row, Col, Form, Input, Button } from 'antd';

function RegistrationForm() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row className="registration-form-wrapper">
      <Col className="registration-form">
        <Form
          name="basic"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Username"
            name="login"
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
            <Input size="large" placeholder="Enter password" />
          </Form.Item>

          <Form.Item
            label="Repeat password"
            name="rePassword"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input size="large" placeholder="Repeat password" />
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
