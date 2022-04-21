import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import HistoryHeader from './components/HistoryHeader';
import HistoryList from './components/HistoryList';
import CreateHistoryForm from './components/CreateHistoryForm';
import { getCar } from '../../features/carsCreator';

function CarHistory() {
  const { carId } = useParams();
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getCar({ carId }));
  }, []);

  return (
    <>
      <HistoryHeader setIsModalVisible={setIsModalVisible} />
      <HistoryList carId={carId} />
      <CreateHistoryForm
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        carId={carId}
      />
    </>
  );
}

export default CarHistory;
