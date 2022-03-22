import React, { useState } from 'react';
import CarList from './components/CarList';
import ModalWin from './components/CreateCarForm';
import GarageTitleWithBtn from './components/TitleWithBtn';

function Garage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <GarageTitleWithBtn setIsModalVisible={setIsModalVisible} />
      <CarList />
      <ModalWin isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </>
  );
}

export default Garage;
