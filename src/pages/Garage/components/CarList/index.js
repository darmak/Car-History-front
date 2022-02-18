import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarCard from '../../../../components/Car-card';

const CarList = () => {
    const cars = useSelector((state) => state.car.cars);

    console.log(cars);

    const elements = cars.map(item => {
        const {_id, ...itemProps} = item;
        return <CarCard _id={_id} {...itemProps} key={_id}/>
    })
    return (
        <>
            {elements}
        </>
  )
}

export default CarList;