import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchPanel from './components/SearchPanel';
import Counters from './components/Counters';
import CarCard from '../../components/CarCard';
import { searchCars } from '../../features/carsCreator.js';
import Spinner from '../../components/Spinner';
import { clearSearchCars } from '../../features/cars-slice';

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

  useEffect(() => {
    dispatch(clearSearchCars());
  }, []);

  const elements = cars.map((item) => {
    return <CarCard {...item} key={item.id} />;
  });

  return (
    <>
      <SearchPanel searchHandler={searchHandler} debounceDelay={500} />
      {loading ? <Spinner /> : !!cars.length && elements}
      <Counters />
    </>
  );
}

export default Home;
