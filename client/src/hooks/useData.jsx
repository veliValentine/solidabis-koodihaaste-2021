import { useState } from 'react';
import { compare, consumption } from '../services/carService';

const useData = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [difference, setDifference] = useState(null);

  const updateData = (values) => {
    const { vehicle, distance, velocity1, velocity2 } = values;
    if (velocity2) {
      compare(vehicle, distance, velocity1, velocity2)
        .then(setData);
    } else {
      consumption(vehicle, distance, velocity1)
        .then(setData);
    }
  };

  const setData = (data) => {
    const { data1 = null, data2 = null, difference = null } = data;
    setData1(data1);
    setData2(data2);
    setDifference(difference);
  };

  return [data1, data2, difference, updateData];
};

export default useData;
