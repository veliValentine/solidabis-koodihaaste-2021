import { useState } from 'react';
import NumberInput from './NumberInput';

const ConsumptionForm = ({ submit }) => {
  const [vehicle] = useState('A');
  const [distance, setDistance] = useState(20);
  const [velocity1, setVelocity1] = useState(50);
  const [velocity2, setVelocity2] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(vehicle, Number(distance), Number(velocity1), Number(velocity2));
  };

  return (
    <form className="velocity" onSubmit={handleSubmit}>
      <h2>{vehicle}</h2>
      <NumberInput
        id="distance"
        value={distance}
        setValue={setDistance}
        placeholder="Distance"
        label="Enter distance: "
        required
      />
      <NumberInput
        id="velocity1"
        value={velocity1}
        setValue={setVelocity1}
        placeholder="Velocity"
        label="Enter first velocity: "
        required
      />
      <NumberInput
        id="velocity2"
        value={velocity2}
        setValue={setVelocity2}
        placeholder="Velocity"
        label="Enter second velocity (optional):"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConsumptionForm;
