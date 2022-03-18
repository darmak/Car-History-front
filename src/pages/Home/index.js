import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, Space } from 'antd';
import SearchPanel from './components/SearchPanel';
import Counters from './components/Counters';
import CarCard from '../../components/CarCard';
import { carSearch } from '../../features/carsCreator.js';
import { debounce } from '../../helpers/debounce';

import './index.scss';

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const cars = useSelector((state) => state.cars.carsSearch);
  const searchHandler = (e) => {
    if (e.target.value.length >= 3) {
      setLoading(true);
      dispatch(carSearch({ vin: e.target.value.toUpperCase() })).then(() => setLoading(false));
    }
  };

  const searchDebounce = debounce(searchHandler, 500);

  const elements = [];

  for (let i = 0; i < cars.length; i++) {
    if (i < 3) {
      const { id, ...itemProps } = cars[i];
      elements.push(<CarCard {...itemProps} key={id} />);
    } else {
      break;
    }
  }
  // const elements = cars.map((item) => {
  //   const { id, ...itemProps } = item;
  //   return <CarCard {...itemProps} key={id} />;
  // });

  return (
    <>
      <SearchPanel setLoading={setLoading} searchDebounce={searchDebounce} />
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
