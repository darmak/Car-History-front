import React from 'react';
import './index.scss';
import { Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

function ModalWin({ active, setActive }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={active ? 'modal show' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-title">
            <Title level={1}>Add new car</Title>
          </div>
          <div className="modal-form">
            <Form
              className="form"
              name="basic"
              layout="vertical"
              autoComplete="off"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>
              <Form.Item
                label="Car brand"
                name="carBrand"
                rules={[{ required: true, message: 'Please input your car brand!' }]}>
                <Input size="large" placeholder="Enter car brand" />
              </Form.Item>

              <Form.Item
                label="Model of car"
                name="modelOfCar"
                rules={[
                  {
                    required: true,
                    message: 'Please input your model of car!'
                  }
                ]}>
                <Input size="large" placeholder="Enter model of car" />
              </Form.Item>

              <Form.Item
                label="Year of car manufacture"
                name="yearOfCarManufacture"
                rules={[
                  {
                    required: true,
                    message: 'Please input your year of car manufacture!'
                  }
                ]}>
                <Input size="large" placeholder="Enter model of car" />
              </Form.Item>

              <Form.Item
                label="Car mileage"
                name="carMileage"
                rules={[{ required: true, message: 'Please input your car mileage!' }]}>
                <Input size="large" placeholder="Enter car mileage" />
              </Form.Item>

              <Form.Item>
                <Button size="large" type="primary" htmlType="submit">
                  Add car
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWin;
