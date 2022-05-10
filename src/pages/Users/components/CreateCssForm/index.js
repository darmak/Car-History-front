import React from 'react';
import { Form, Button, Input, Modal } from 'antd';
import { useDispatch } from 'react-redux';

import { getAllUsers } from '../../../../features/usersCreator';
import { addNewCss } from '../../../../features/usersCreator';

import './index.scss';

function CreateCssForm({ isModalVisible, setIsModalVisible }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (value) => {
    if (value.password === value.rePassword) {
      dispatch(addNewCss({ ...value, role: 'css' })).then(() => dispatch(getAllUsers()));
    }
    setIsModalVisible(false);
    form.resetFields();
  };

  const onClose = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Add new CSS"
      getContainer={false}
      visible={isModalVisible}
      onCancel={onClose}
      footer={[
        <div key="submit" className="modal-history-btn">
          <Button form={form} size="large" type="primary" htmlType="submit">
            Add CSS
          </Button>
        </div>
      ]}>
      <div className="modal-form-history">
        <Form
          className="form"
          name={form}
          form={form}
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input CSS name!' }]}>
            <Input size="large" placeholder="Enter name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input CSS email!' }]}>
            <Input size="large" placeholder="Enter email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input CSS password!' }]}>
            <Input.Password size="large" placeholder="Enter password" />
          </Form.Item>

          <Form.Item
            label="Repeat password"
            name="rePassword"
            rules={[{ required: true, message: 'Please input CSS password!' }]}>
            <Input.Password size="large" placeholder="Repeat password" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

export default CreateCssForm;
