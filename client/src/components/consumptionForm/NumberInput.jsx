
const NumberInput = ({
  id,
  value,
  setValue,
  required = false,
  placeholder = '',
  label = '',
  min = 0,
  max = 500,
}) => {
  const handleChange = (event) => setValue(event.target.value);
  return (
    <div className="number-inputs">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        min={min}
        max={max}
        step="0.1"
        required={required}
      />
      <input
        type="range"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        min={min}
        max="500"
        step="10"
        required={required}
      />
    </div>
  );
};

export default NumberInput;
