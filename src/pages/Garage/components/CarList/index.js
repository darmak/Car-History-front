import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, Space } from 'antd';
import CarCard from '../../../../components/CarCard';
import { userCars } from '../../../../features/carsCreator.js';

function CarList() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const cars = useSelector((state) => state.cars.cars);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    setLoading(true);
    dispatch(userCars({ userId: user.id })).then(() => setLoading(false));
  }, []);

  const elements = cars.map((item) => {
    const { id, ...itemProps } = item;
    return <CarCard {...itemProps} key={id} />;
  });
  return (
    <>
      {loading ? (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      ) : (
        elements
      )}
    </>
  );
}

export default CarList;
