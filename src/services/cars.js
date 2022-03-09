import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getSearchCar = (vin) => {
  return axios.get(`${BASE_URL}/car`, { params: { vin } }).then((res) => res.data);
};
