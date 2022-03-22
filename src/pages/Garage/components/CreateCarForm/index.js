import React, { useState, useEffect } from 'react';
import { Form, Button, Input, Select, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getUserCars } from '../../../../features/carsCreator';
import { getAllBrands } from '../../../../features/brandsCreator';
import { getCarModels } from '../../../../features/modelsCreator';
import { addNewCar } from '../../../../features/carsCreator';
import { carRules } from './carFormConstants';

import './index.scss';

const { Option } = Select;

function CreateCarForm({ isModalVisible, setIsModalVisible }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const brands = useSelector((state) => state.brands.brands);
  const models = useSelector((state) => state.models.models);
  const [brandValue, setBrandValue] = useState(0);
  const [isBrandSelected, setIsBrandSelected] = useState(false);

  useEffect(() => {
    dispatch(getAllBrands());
  }, []);

  useEffect(() => {
    dispatch(getCarModels({ carBrandId: brandValue }));
  }, [brandValue]);

  function onBrandChange(value) {
    setBrandValue(value);
    setIsBrandSelected(true);
  }

  const onFinish = (value) => {
    dispatch(addNewCar({ ...value, userId: user.id })).then(() => {
      dispatch(getUserCars({ userId: user.id }));
    });
    setIsModalVisible(false);
    form.resetFields();
  };

  const onClose = () => {
    form.resetFields();
    setIsModalVisible(false);
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
    <Modal
      title="Add new car"
      getContainer={false}
      visible={isModalVisible}
      onCancel={onClose}
      footer={[
        <div key="submit" className="modal-btn">
          <Button form={form} size="large" type="primary" htmlType="submit">
            Add Car
          </Button>
        </div>
      ]}>
      <div className="modal-form">
        <Form
          className="form"
          name={form}
          form={form}
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}>
          <Form.Item label="Car brand" name="carBrandId" rules={carRules.brand}>
            <Select onChange={onBrandChange} placeholder="Select a brand">
              {brandsElements}
            </Select>
          </Form.Item>
          <Form.Item label="Model of car" name="carModelId" rules={carRules.model}>
            <Select placeholder="Select a model" disabled={isBrandSelected ? false : true}>
              {modelsElements}
            </Select>
          </Form.Item>
          <Form.Item label="Car VIN" name="vin" rules={carRules.vin}>
            <Input size="large" placeholder="Enter car VIN" />
          </Form.Item>
          <Form.Item label="Year of car manufacture" name="year" rules={carRules.year}>
            <Input size="large" placeholder="Enter year of car" />
          </Form.Item>

          <Form.Item label="Car mileage" name="mileage" rules={carRules.mileage}>
            <Input size="large" placeholder="Enter car mileage" />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}

export default CreateCarForm;
