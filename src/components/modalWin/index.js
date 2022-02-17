import React from 'react';
import './index.scss';
import { Typography, Form, Input, Button } from 'antd';
const { Title } = Typography;

const ModalWin= ({active, setActive}) => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
  
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
    <div className={active ? "modal show" : "modal"} onClick={() => setActive(false)}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
                <div className="modal-title">
                    <Title level={1}>Add new car</Title>
                </div>
                <div className="modal-form">
                    <Form
                        name="basic"
                        labelCol={{ span: 12 }}
                        wrapperCol={{ span: 12 }}
                        autoComplete="off"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        >

                        <Form.Item
                        label="Car brand"
                        name="carBrand"
                        rules={[{ required: true, message: 'Please input your car brand!' }]}
                        >
                        <Input placeholder="Enter car brand"/>
                        </Form.Item>

                        <Form.Item
                        label="Model of car"
                        name="modelOfCar"
                        rules={[{ required: true, message: 'Please input your model of car!' }]}
                        >
                        <Input placeholder="Enter model of car"/>
                        </Form.Item>

                        <Form.Item
                        label="Year of car manufacture"
                        name="yearOfCarManufacture"
                        rules={[{ required: true, message: 'Please input your year of car manufacture!' }]}
                        >
                        <Input placeholder="Enter model of car"/>
                        </Form.Item>

                        <Form.Item
                        label="Car mileage"
                        name="carMileage"
                        rules={[{ required: true, message: 'Please input your car mileage!' }]}
                        >
                        <Input placeholder="Enter car mileage"/>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 9, span: 15 }}>
                        <Button type="primary" htmlType="submit">
                            Add car
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalWin;

