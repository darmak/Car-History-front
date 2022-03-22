import React, { useState, useEffect } from 'react';
import { Typography, Form, Input, Button, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { allBrands } from '../../../../features/brandsCreator';
import { allCarModels } from '../../../../features/modelsCreator';

import './index.scss';

const { Option } = Select;
const { Title } = Typography;

function ModalWin({ active, setActive }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const brands = useSelector((state) => state.brands.brands);
  const models = useSelector((state) => state.models.models);
  const [selectedBrand, setSelectedBrand] = useState(false);
  const [newCar, setNewCar] = useState({
    mileage: '',
    year: 0,
    vin: '',
    userId: user.id,
    carBrandId: 0,
    carModelId: 0
  });

  useEffect(() => {
    dispatch(allBrands());
  }, []);

  useEffect(() => {
    dispatch(allCarModels({ carBrandId: newCar.carBrandId }));
  }, [newCar.carBrandId]);

  function BrandHandleChange(value) {
    setSelectedBrand(true);
    setNewCar({ ...newCar, carBrandId: value });
  }

  function modelHandleChange(value) {
    setSelectedBrand(true);
    setNewCar({ ...newCar, carModelId: value });
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const brandsElements = brands.map((item) => {
    return (
      <Option key={item.id} value={item.id}>
        {item.brand}
      </Option>
    );
  });

  const modelsElements = models.map((item) => {
    return (
      <Option key={item.id} value={item.id}>
        {item.model}
      </Option>
    );
  });

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
                name="Brand"
                rules={[
                  {
                    required: true,
                    message: 'Please input your car brand!'
                  }
                ]}>
                <Select onChange={BrandHandleChange} placeholder="Select a brand">
                  {brandsElements}
                </Select>
              </Form.Item>
              {selectedBrand ? (
                <Form.Item
                  label="Model of car"
                  name="Model"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your model of car!'
                    }
                  ]}>
                  <Select onChange={modelHandleChange} placeholder="Select a model">
                    {modelsElements}
                  </Select>
                </Form.Item>
              ) : (
                <Form.Item label="Model of car" name="Model">
                  <Select placeholder="Select a model" disabled></Select>
                </Form.Item>
              )}

              <Form.Item
                label="Car VIN"
                name="carVin"
                rules={[{ required: true, message: 'Please input your car VIN!' }]}>
                <Input size="large" placeholder="Enter car VIN" />
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
