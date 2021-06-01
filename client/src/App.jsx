import React, { useState } from 'react';

import useData from './hooks/useData';
import useDataHistory from './hooks/useDataHistory';

import ConsumptionForm from './components/consumptionForm';
import Results from './components/results';
import VehicleForm from './components/VehicleForm';

const App = () => {
  const [dataHistory, addHistory] = useDataHistory();
  const [data, updateData] = useData(addHistory);
  const [vehicle, setVehicle] = useState('');

  const handleVehicleSubmit = (value = '') => {
    setVehicle(value.toUpperCase());
    updateData();
  };

  const handleVelocitySubmit = (values) => updateData({ ...values, vehicle });

  return (
    <div>
      <History history={dataHistory} />
      <hr />
      <h1> Welcome!</h1>
      <VehicleForm submit={handleVehicleSubmit} />
      <hr />
      <h2>{vehicle}</h2>
      {vehicle && <ConsumptionForm submit={handleVelocitySubmit} />}
      {(vehicle && data.data1) && <><hr /><Results data={data} /></>}
    </div>
  );
};

const History = ({ history }) => {
  console.log(history);
  return (
    <table className="history">
      <thead>
        <tr>
          <th>Vehicle</th>
          <th>Distance</th>
          <th>Velocity</th>
          <th>Time</th>
          <th>Fuel</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item, index) => (
          <tr key={index}>
            <td>{item.carId}</td>
            <td>{item.distance}</td>
            <td>{item.velocity}</td>
            <td>{item.time}</td>
            <td>{item.fuel}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;
