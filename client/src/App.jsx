import React, { useState } from 'react';

import useData from './hooks/useData';

import ConsumptionForm from './components/consumptionForm';
import Results from './components/results';
import VehicleForm from './components/VehicleForm';

const App = () => {
  const [data, updateData] = useData();
  const [vehicle, setVehicle] = useState('');

  const handleVehicleSubmit = (value = '') => {
    setVehicle(value.toUpperCase());
    updateData();
  };

  const handleVelocitySubmit = (values) => {
    updateData({ ...values, vehicle });
  };

  return (
    <div>
      <h1> Welcome!</h1>

      <VehicleForm submit={handleVehicleSubmit} />
      <hr />

      <h2>{vehicle}</h2>
      {vehicle && <ConsumptionForm submit={handleVelocitySubmit} />}
      {(vehicle && data.data1) && <><hr /><Results data={data} /></>}
    </div>
  );
};

export default App;
