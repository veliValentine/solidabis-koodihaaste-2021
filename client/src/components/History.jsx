import { Distance, Fuel, Time, Velocity } from './results/Values';

const History = ({ history }) => {
  return (
    <table className="history">
      <thead>
        <tr>
          <th>Vehicle</th>
          <th>Distance</th>
          <th>Velocity</th>
          <th>Time</th>
          <th>Fuel</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item, index) => (
          <tr key={index}>
            <td>{item.carId}</td>
            <td><Distance value={item.distance} text="" /></td>
            <td><Velocity value={item.velocity} text="" /></td>
            <td><Time value={item.time} text="" /></td>
            <td><Fuel value={item.fuel} text="" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default History;