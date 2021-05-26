import { useState } from 'react';
import VelocityInput from './VelocityInput';

const VelocityForm = ({ submit }) => {
  const [vehicle] = useState('A');
  const [velocity1, setVelocity1] = useState(50);
  const [velocity2, setVelocity2] = useState(80);

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(vehicle, Number(velocity1), Number(velocity2));
  };

  return (
    <form className="velocity" onSubmit={handleSubmit}>
      <h2>{vehicle}</h2>
      <VelocityInput
        id="velocity1"
        value={velocity1}
        handleChange={(event) => setVelocity1(event.target.value)}
        label="Enter first velocity: "
        required
      />
      <VelocityInput
        id="velocity2"
        value={velocity2}
        handleChange={(event) => setVelocity2(event.target.value)}
        label="Enter second velocity:"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default VelocityForm;
