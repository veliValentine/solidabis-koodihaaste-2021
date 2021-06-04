import useCars from '../hooks/useCars';

const VehicleForm = ({ submit, updateError }) => {
  const [cars] = useCars(updateError);

  if (!cars) return null;

  const handleChange = (event) => submit(event.target.value.toUpperCase());

  const carOption = ({ id }) => <option key={id} value={id}>{id}</option>;
  const options = cars.map(carOption);

  return (
    <div className="vehicle-form">
      <label htmlFor="vehicle">Choose vehicle: </label>
      <select id="vehicle" onChange={handleChange}>
        <option value="">Select vehicle</option>
        {options}
      </select>
    </div>
  );
};

export default VehicleForm;
