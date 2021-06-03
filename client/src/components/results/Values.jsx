export const Velocity = ({ value, text = 'Velocity: ' }) => (
  <span>{text}{value}km/h</span>
);

export const Distance = ({ value, text = 'Distance: ' }) => (
  <span>{text}{value.toFixed(1)}km</span>
);

export const Time = ({ value, difference, text = 'Time: ' }) => {
  const differenceText = difference ? getDifferenceText(value) : '';
  const [days, hours, minutes] = getTime(Math.abs(value));
  const daysText = days ? `${days} days ` : '';
  return (
    <span>{text}{daysText} {hours} hours and {minutes} minutes {differenceText}</span>
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

export const Fuel = ({ value, text = 'Fuel: ' }) => (
  <span>{text}{value.toFixed(2)} liters</span>
);
