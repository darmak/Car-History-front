import React, { useState } from 'react';
import CarList from './components/CarList';
import ModalWin from './components/CreateCarForm';
import GarageTitleWithBtn from './components/TitleWithBtn';

function Garage() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <GarageTitleWithBtn setModalActive={setModalActive} />
      <CarList />
      <ModalWin active={modalActive} setActive={setModalActive} />
    </>
  );
}

export default Garage;
