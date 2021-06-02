import { useState, useEffect } from 'react';
import carService from '../services/carService';

const useCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const serverCars = await carService.cars();
    if (serverCars) {
      setCars(serverCars);
    }
  };

  return [cars, getCars];
};

export default useCars;