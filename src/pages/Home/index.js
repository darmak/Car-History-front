import React, { useState } from 'react';
import SearchPanel from './components/Search-panel';
import Counters from './components/Counters';
import CarCard from '../../components/Car-card';

function Home() {
  const [clickSearch, setClickSearch] = useState(false);

  return (
    <>
      <SearchPanel setClickSearch={setClickSearch} />
      {clickSearch ? <CarCard /> : 'спиннер'}
      <Counters />
    </>
  );
}

export default Home;
