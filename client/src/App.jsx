import React, { useState } from 'react';
import VelocityForm from './components/velocityForm';

const App = () => {
  const handleVelocitySubmit = (vehicle, velocity1, velocity2) => {
    console.log('submit', { vehicle, velocity1, velocity2 });
  };

  return (
    <div>
      <h1> Welcome!</h1>
      <VelocityForm submit={handleVelocitySubmit} />
    </div>
  );
};

export default App;
