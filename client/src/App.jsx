import React, { useState } from 'react';

import useData from './hooks/useData';
import useDataHistory from './hooks/useDataHistory';

import ConsumptionForm from './components/consumptionForm';
import Results from './components/results';
import VehicleForm from './components/VehicleForm';
import History from './components/History';

const App = () => {
  const [dataHistory, addHistory, clearHistory] = useDataHistory();
  const [data, updateData] = useData(addHistory);
  const [vehicle, setVehicle] = useState('');

  const handleVehicleSubmit = (value = '') => {
    setVehicle(value.toUpperCase());
    updateData();
  };

  const handleVelocitySubmit = (values) => updateData({ ...values, vehicle });
  const showResults = vehicle && data.data1;
  return (
    <div>
      <h1> Welcome!</h1>
      <VehicleForm submit={handleVehicleSubmit} />
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
