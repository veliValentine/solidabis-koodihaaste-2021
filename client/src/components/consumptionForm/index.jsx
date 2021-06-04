import { useState } from 'react';
import NumberInput from './NumberInput';

const ConsumptionForm = ({ submit }) => {
  const [distance, setDistance] = useState(100);
  const [velocity1, setVelocity1] = useState(100);
  const [velocity2, setVelocity2] = useState(120);

  const handleSubmit = (event) => {
    event.preventDefault();
    submit({
      distance: Number(distance),
      velocity1: Number(velocity1),
      velocity2: Number(velocity2),
    });
  };

  const optionalVelocityLabel = <span>Enter second velocity (km/h) <abbr title="optional">*</abbr>: </span>;

  return (
    <form className="consumption-form" onSubmit={handleSubmit}>
      <NumberInput
        id="distance"
        value={distance}
        setValue={setDistance}
        placeholder="Distance (km/h)"
        label="Enter distance (km): "
        required
        min={0.1}
      />
      <NumberInput
        id="velocity1"
        value={velocity1}
        setValue={setVelocity1}
        placeholder="Velocity (km/h)"
        label="Enter first velocity (km/h): "
        required
        min={1}
      />
      <NumberInput
        id="velocity2"
        value={velocity2}
        setValue={setVelocity2}
        placeholder="Velocity (km/h)"
        label={optionalVelocityLabel}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConsumptionForm;
