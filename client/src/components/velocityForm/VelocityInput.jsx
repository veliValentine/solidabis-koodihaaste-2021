
const VelocityInput = ({ id, value, handleChange, required, label = 'Enter velocity: ' }) => (
  <div className="velocity">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type="number"
      value={value}
      placeholder={'Velocity'}
      onChange={handleChange}
      min="0"
      step="0.1"
      required={required}
    />
    <input
      type="range"
      value={value}
      placeholder={'Velocity'}
      onChange={handleChange}
      min="0"
      max="500"
      step="10"
      required={required}
    />
  </div>
);

export default VelocityInput;
