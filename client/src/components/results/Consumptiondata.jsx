import { TableBody, TableHead } from '../Table';
import { Distance, Fuel, Time, Velocity, wrapTableRow } from './Values';

const ConsumptionData = ({ data }) => {
  const { velocity, distance, time, fuel } = data;

  const rows = [
    <Distance value={distance} />,
    <Time value={time} />,
    <Fuel value={fuel} />
  ].map(wrapTableRow);

  return (
    <table className="consumption">
      <TableHead>
        <th><Velocity value={velocity} /></th>
      </TableHead>
      <TableBody>
        {rows}
      </TableBody>
    </table>
  );
};

export default ConsumptionData;
