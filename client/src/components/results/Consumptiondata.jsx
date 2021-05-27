import { TableBody, TableHead } from '../Table';
import { Distance, Fuel, Time, Velocity } from './Values';

const ConsumptionData = ({ data }) => {
  const { velocity, distance, time, fuel } = data;
  return (
    <table className="consumption">
      <TableHead>
        <Velocity value={velocity} />
      </TableHead>
      <TableBody>
        <Distance value={distance} />
        <Time value={time} />
        <Fuel value={fuel} />
      </TableBody>
    </table>
  );
};

export default ConsumptionData;
