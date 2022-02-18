import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars: [
        {_id:'3', brand :'BMW', model: 'E38', year: '2010', VIN:'QWERT456SFWERSW123', mileage:'253705'},
        {_id:'5', brand :'Mersedes-Benz', model: 'A 200', year: '2020', VIN:'OYKT999OEIRMVSW666', mileage:'1250'}
    ],
    history: [
        {_id:'10', author: 'Dima (buravkin.08@gmail.com)',mileage:"1520",date: "14/11/1996", description: "Lorem HnAAAHlklEQVR4Ae3dP3P TWBSGcbGzM6GCKqlIBRVawdwawdawdw 0dHRJFarQ0eUT8LH4B nRU0NHR0UEFVdIlFRV 7TzRksomPY 8uykTk"},
        {_id:'2', author: 'Nikita (klim@mail.com)',mileage:"253520",date: "20/01/2015", description: "The data in this guide will be useful when performing maintenance and repair of the vehicle."},
        {_id:'5', author: 'Andrei (onuf@mail.ru)',mileage:"12350",date: "2/3/2021", description: "Can be useful for specialists engaged in maintenance and repair of cars and tractors."}
    ]
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
    },
    
});

export const { registrationRoute, authorizationRoute } = carSlice.actions;
export default carSlice.reducer;