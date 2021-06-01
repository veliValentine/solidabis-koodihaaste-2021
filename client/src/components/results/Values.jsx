export const Velocity = ({ value }) => (
  <th>Velocity: {value}km/h</th>
);

export const Distance = ({ value }) => (
  <tr><td>Distance: {value.toFixed(1)}km</td></tr>
);

export const Time = ({ value, difference }) => {
  const differenceText = difference ? getDifferenceText(value) : '';
  const [days, hours, minutes] = getTime(Math.abs(value));
  const daysText = days ? `${days} days ` : '';
  return (
    <tr><td>Time: {daysText} {hours} hours and {minutes} minutes {differenceText}</td></tr>
  );
};

const getDifferenceText = (hours) => {
  if (hours === 0) return '';
  return hours < 0 ? 'faster' : 'slower';
};

const getTime = (hourValue) => {
  if (hourValue < 0) {
    throw new Error('time is less than zero');
  }
  const days = Math.floor(hourValue / 24);
  hourValue -= days * 24;
  const hours = Math.floor(hourValue);
  hourValue -= hours;
  const minutes = Math.ceil(hourValue * 60);
  return [days, hours, minutes];
};

export const Fuel = ({ value }) => (
  <tr><td>Fuel: {value.toFixed(2)} liters</td></tr>
);
