
const NumberInput = ({
  id,
  value,
  setValue,
  required,
  placeholder,
  label = 'Enter velocity: ',
  min = 0
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
