import { useState } from 'react';
import carService from '../services/carService';

const useData = (addHistory) => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [difference, setDifference] = useState(null);

  const updateData = async (values = {}) => {
    const { vehicle, distance, velocity1, velocity2 } = values;
    if (velocity2) {
      return setData(await carService.compare(vehicle, distance, velocity1, velocity2));
    }
    if (velocity1) {
      return setData(await carService.consumption(vehicle, distance, velocity1));
    }
    return setData();
  };

  const setData = (data = {}) => {
    const { data1 = null, data2 = null, difference = null } = data;
    setData1(data1);
    setData2(data2);
    addHistory(data1, data2);
    setDifference(difference);
  };
  const data = {
    data1,
    data2,
    difference
  };
  return [data, updateData];
};

export default useData;
