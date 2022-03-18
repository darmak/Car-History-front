import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, Space } from 'antd';
import SearchPanel from './components/SearchPanel';
import Counters from './components/Counters';
import CarCard from '../../components/CarCard';
import { searchCars } from '../../features/carsCreator.js';

import './index.scss';

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const cars = useSelector((state) => state.cars.carsSearch);
  const searchHandler = (e) => {
    if (e.target.value.length >= 3) {
      setLoading(true);
      dispatch(searchCars({ vin: e.target.value.toUpperCase(), limit: 3 })).then(() =>
        setLoading(false)
      );
    }
  };

  const elements = cars.map((item) => {
    const { id, ...itemProps } = item;
    return <CarCard carId={id} {...itemProps} key={id} />;
  });

  return (
    <>
      <SearchPanel searchHandler={searchHandler} debounceDelay={500} />
      {loading ? (
        <div className="spinner">
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        !!cars.length && elements
      )}
      <Counters />
    </>
  );
}

export default Home;
