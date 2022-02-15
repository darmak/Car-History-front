import React from 'react';
import "./index.scss";
import { Row, Col, Form, Input, Button } from 'antd';

const RegistrationForm= () => {

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
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >

            <Form.Item
              label="Username"
              name="login"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Enter username" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Enter email"/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input placeholder="Enter password"/>
            </Form.Item>

            <Form.Item
              label="Repeat password"
              name="rePassword"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input placeholder="Repeat password"/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    
  )
}

export default RegistrationForm;