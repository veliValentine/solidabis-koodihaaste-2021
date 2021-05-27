export const Velocity = ({ value }) => (
  <th>Velocity: {value}km/h</th>
);

export const Distance = ({ value }) => (
  <tr><td>Distance: {value.toFixed(1)}km</td></tr>
);

export const Time = ({ value }) => {
  const days = Math.floor(value / 24);
  value -= days * 24;
  const hours = Math.floor(value);
  value -= hours;
  const minutes = Math.ceil(value * 60);
  const daysText = days ? `${days} days ` : '';
  return (
    <tr><td>Time: {daysText} {hours} hours and {minutes} minutes</td></tr>
  );
};

export const Fuel = ({ value }) => (
  <tr><td>Fuel: {value.toFixed(2)} liters</td></tr>
);
