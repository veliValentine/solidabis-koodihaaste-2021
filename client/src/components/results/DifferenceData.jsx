import { TableBody, TableHead } from '../Table';
import { Fuel, Time, wrapTableRow } from './Values';

const DifferenceData = ({ difference }) => {
  const { time, fuel } = difference;
  const rows = [
    <Time value={time} difference />,
    <Fuel value={fuel} />
  ].map(wrapTableRow);

  return (
    <table className="difference">
      <TableHead>
        <th>Difference</th>
      </TableHead>
      <TableBody>
        {rows}
      </TableBody>
    </table>
  );
};

export default DifferenceData;
