import { useState, useEffect } from 'react';

import carService from '../services/carService';

const useCars = (updateError) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      try {
        const serverCars = await carService.cars();
        if (serverCars) {
          setCars(serverCars);
        }
      } catch (error) {
        updateError('Could not get vehicle information from server.');
      }
    };

    getCars();
  }, [updateError]);

  return [cars];
};

export default useCars;