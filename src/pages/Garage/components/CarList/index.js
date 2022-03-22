import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarCard from '../../../../components/CarCard';
import { getUserCars } from '../../../../features/carsCreator.js';
import Spinner from '../../../../components/Spinner';

function CarList() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const cars = useSelector((state) => state.cars.cars);
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    setLoading(true);
    dispatch(getUserCars({ userId: user.id })).then(() => setLoading(false));
  }, []);

  const elements = cars.map((item) => {
    return <CarCard {...item} key={item.id} />;
  });
  return <>{loading ? <Spinner /> : elements.length && elements}</>;
}

export default CarList;
