export const carRules = {
  brand: [
    {
      required: true,
      message: 'Please input your car brand!'
    }
  ],
  model: [
    {
      required: true,
      message: 'Please input your model of car!'
    }
  ],
  vin: [{ required: true, message: 'Please input your car VIN!' }],
  year: [
    {
      required: true,
      message: 'Please input your year of car manufacture!'
    }
  ],
  mileage: [{ required: true, message: 'Please input your car mileage!' }]
};
