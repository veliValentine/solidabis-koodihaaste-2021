import { Distance, Fuel, Time, Velocity } from './results/Values';
import { TableBody, TableHead } from './Table';

const History = ({ history = [], clearHistory }) => {
  return (
    <div className="history">
      <h2>History</h2>
      <HistoryButtons
        history={history}
        clearHistory={clearHistory}
      />
      <HistoryTable history={history.slice(0, 5)} />
    </div>
  );
};

const HistoryButtons = ({ history = [], clearHistory }) => {
  if (history.length < 1) return null;
  const handleClear = (event) => {
    event.preventDefault();
    clearHistory();
  };
  return (
    <div className="history-buttons">
      <button onClick={handleClear} type="button">Clear history</button>
    </div >
  );
};

const HistoryTable = ({ history = [] }) => {
  if (!history.length) {
    return <p>Nothing to show...</p>;
  }
  return (
    <table className="history-table">
      <TableHead>
        <th>Vehicle</th>
        <th>Distance</th>
        <th>Velocity</th>
        <th>Time</th>
        <th>Fuel</th>
      </TableHead>
      <TableBody>
        {history.map((item, index) => (
          <tr key={index}>
            <td>{item.carId}</td>
            <td><Distance value={item.distance} text="" /></td>
            <td><Velocity value={item.velocity} text="" /></td>
            <td><Time value={item.time} text="" /></td>
            <td><Fuel value={item.fuel} text="" /></td>
          </tr>
        ))}
      </TableBody>
    </table>
  );
};

export default History;