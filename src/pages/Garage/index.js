import React, { useState } from 'react';
import CarList from './components/CarList';
import ModalWin from '../../components/modalWin';
import GarageTitleWithBtn from './components/GarageTitleWithBtn';

const Garage = () => {
    const [modalActive, setModalActive] = useState(true);
    return (
        <>
            <GarageTitleWithBtn/>
            <CarList/>
            <ModalWin active={modalActive} setActive={setModalActive}/>
        </>
  )
}

export default Garage;