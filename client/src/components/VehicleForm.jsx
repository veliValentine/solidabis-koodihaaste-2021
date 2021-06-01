import useCars from '../hooks/useCars';

const VehicleForm = ({ submit }) => {
  const [cars] = useCars();

  const handleChange = (event) => {
    console.log('submit vehicle form');
    submit(event.target.value.toUpperCase());
  };

  const options = cars.map(({ id }) => <option key={id} value={id}>{id}</option>); 

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
