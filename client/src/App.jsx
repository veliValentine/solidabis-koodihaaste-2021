import React, { useState } from 'react';

import useError from './hooks/useError';
import useDataHistory from './hooks/useDataHistory';
import useData from './hooks/useData';

import ConsumptionForm from './components/consumptionForm';
import Results from './components/results';
import VehicleForm from './components/VehicleForm';
import History from './components/History';
import Error from './components/Error';

const App = () => {
  const [error, updateError] = useError();
  const [dataHistory, addHistory, clearHistory] = useDataHistory();
  const [data, updateData] = useData(updateError, addHistory);
  const [vehicle, setVehicle] = useState('A');

  const handleVehicleSubmit = (value = '') => {
    setVehicle(value.toUpperCase());
    updateData();
  };

  const handleVelocitySubmit = (values) => updateData({ ...values, vehicle });
  const showResults = vehicle && data.data1;
  return (
    <div>
      <h1> Welcome!</h1>
      <Error message={error} />
      <VehicleForm submit={handleVehicleSubmit} updateError={updateError} />
      <hr />
      <h2>{vehicle}</h2>
      {vehicle ? <ConsumptionForm submit={handleVelocitySubmit} /> : null}
      {showResults ? <><hr /><Results data={data} /></> : null}
      <hr />
      <History history={dataHistory} clearHistory={clearHistory} />
    </div>
  );
};

export default App;
