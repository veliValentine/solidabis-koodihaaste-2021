import React from 'react';

import useData from './hooks/useData';

import ConsumptionForm from './components/consumptionForm';
import Results from './components/results';

const App = () => {
  const [data1, data2, difference, updateData] = useData();

  const handleVelocitySubmit = (values) => {
    updateData(values);
  };

  return (
    <div>
      <h1> Welcome!</h1>
      <ConsumptionForm submit={handleVelocitySubmit} />
      <hr />
      <Results data1={data1} data2={data2} difference={difference} />
    </div>
  );
};

export default App;
