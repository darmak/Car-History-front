import React from 'react';
import { Form, Button, Input, Modal, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { addNewHistory } from '../../../../features/historiesCreator';
import { getCarHistories } from '../../../../features/historiesCreator';

import './index.scss';

function CreateHistoryForm({ isModalVisible, setIsModalVisible, carId }) {
  const [formHistory] = Form.useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const onFinish = (value) => {
    dispatch(addNewHistory({ ...value, author: user.name, carId })).then(() => {
      dispatch(getCarHistories({ carId }));
    });
    setIsModalVisible(false);
    formHistory.resetFields();
  };

  const onClose = () => {
    formHistory.resetFields();
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Add new history"
      getContainer={false}
      visible={isModalVisible}
      onCancel={onClose}
      footer={[
        <div key="submit" className="modal-history-btn">
          <Button form={formHistory} size="large" type="primary" htmlType="submit">
            Add History
          </Button>
        </div>
      ]}>
      <div className="modal-form-history">
        <Form
          className="form"
          name={formHistory}
          form={formHistory}
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}>
          <Form.Item
            label="Car mileage"
            name="mileage"
            rules={[{ required: true, message: 'Please input your car mileage!' }]}>
            <Input size="large" placeholder="Enter car mileage" />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: 'Please input date!' }]}>
            <DatePicker className="modal-date-picker" />
          </Form.Item>

          <Form.Item
            label="Service description"
            name="description"
            rules={[{ required: true, message: 'Please input description!' }]}>
            <Input size="large" placeholder="Enter description" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

export default CreateHistoryForm;
