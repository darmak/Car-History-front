import React from 'react';
import SearchPanel from './components/Search-panel';
import Counters from './components/Counters';
import CarCard from '../../components/Car-card';

function Home() {
  return (
    <>
      <SearchPanel />
      <CarCard />
      <Counters />
    </>
  );
}

export default Home;
