import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchPanel from './components/Search-panel';
import Counters from './components/Counters';
import CarCard from '../../components/Car-card';
import { carSearch } from '../../features/carsCreator.js';
import Spinner from '../../components/Spinner';

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const cars = useSelector((state) => state.cars.carsSearch);
  console.log(cars);
  const searchHandler = (value) => {
    setLoading(true);
    dispatch(carSearch({ vin: value })).then(() => setLoading(false));
  };

  return (
    <>
      <SearchPanel setLoading={setLoading} searchHandler={searchHandler} />
      {loading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        !!cars.length && <CarCard {...cars[0]} />
      )}
      <Counters />
    </>
  );
}

export default Home;
