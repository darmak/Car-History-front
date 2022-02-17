import React, { useState } from 'react';
import CarList from './components/CarList';
import ModalWin from '../../components/modalWin';
import GarageTitleWithBtn from './components/TitleWithBtn';

const Garage = () => {
    const [modalActive, setModalActive] = useState(false);
    return (
        <>
            <GarageTitleWithBtn setModalActive={setModalActive}/>
            <CarList/>
            <ModalWin active={modalActive} setActive={setModalActive}/>
        </>
  )
}

export default Garage;