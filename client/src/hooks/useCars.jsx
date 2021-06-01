import { useState, useEffect } from 'react';
import carService from '../services/carService';

const useCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    setCars(await carService.cars());
  };

  return [cars, getCars];
};

export default useCars;