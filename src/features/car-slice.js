import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [
    {
      _id: '3',
      brand: 'BMW',
      model: 'E38',
      year: '2010',
      VIN: 'QWERT456SFWERSW123',
      mileage: '253705'
    },
    {
      _id: '5',
      brand: 'Mersedes-Benz',
      model: 'A 200',
      year: '2020',
      VIN: 'OYKT999OEIRMVSW666',
      mileage: '1250'
    }
  ]
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {}
});

export const { registrationRoute, authorizationRoute } = carSlice.actions;
export default carSlice.reducer;
