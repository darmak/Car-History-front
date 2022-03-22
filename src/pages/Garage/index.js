import React, { useState } from 'react';
import CarList from './components/CarList';
import CreateCarForm from './components/CreateCarForm';
import GarageTitleWithBtn from './components/TitleWithBtn';

function Garage() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <GarageTitleWithBtn setIsModalVisible={setIsModalVisible} />
      <CarList />
      <CreateCarForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
    </>
  );
}

export default Garage;
