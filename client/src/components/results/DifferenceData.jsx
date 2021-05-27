import { TableBody, TableHead } from '../Table';
import { Fuel, Time } from './Values';

const DifferenceData = ({ difference }) => {
  const { time, fuel } = difference;
  return (
    <table className="difference">
      <TableHead>
        <th>Difference</th>
      </TableHead>
      <TableBody>
        <Time value={time} />
        <Fuel value={fuel} />
      </TableBody>
    </table>
  );
};

export default DifferenceData;
