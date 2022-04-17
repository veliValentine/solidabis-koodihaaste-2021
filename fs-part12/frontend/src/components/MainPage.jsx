import { useState } from 'react';

import useData from '../hooks/useData';

import ConsumptionForm from './consumptionForm';
import Results from './results';
import VehicleForm from './VehicleForm';

const MainPage = ({ updateError, addHistory }) => {
  const [vehicle, setVehicle] = useState('');
  const [data, updateData] = useData(updateError, addHistory);

  const handleVehicleSubmit = (value = '') => {
    setVehicle(value.toUpperCase());
    updateData();
  };
  const handleVelocitySubmit = (values) => updateData({ ...values, vehicle });
  const showResults = vehicle && data.data1;
  return (
    <div className="main-page">
      <h1> Welcome!</h1>
      <VehicleForm submit={handleVehicleSubmit} updateError={updateError} />
      <h2>{vehicle}</h2>
      {vehicle ? <ConsumptionForm submit={handleVelocitySubmit} /> : null}
      {showResults ? <><hr /><Results data={data} /></> : null}
    </div>
  );
};

export default MainPage;
