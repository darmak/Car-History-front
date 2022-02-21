import React from 'react';
import { useSelector } from 'react-redux';
import CarCard from '../../../../components/Car-card';

function CarList() {
  const cars = useSelector((state) => state.car.cars);

  const elements = cars.map((item) => {
    const { _id, ...itemProps } = item;
    return <CarCard _id={_id} {...itemProps} key={_id} />;
  });
  return <>{elements}</>;
}

export default CarList;
