import ConsumptionData from './Consumptiondata';
import DifferenceData from './DifferenceData';
import './results.css';

const Results = ({ data }) => {
  const { data1, data2, difference } = data;
  const noData = !data1;
  if (noData) {
    return null;
  }
  const noComparison = data1 && (!data2 || !difference);
  if (noComparison) {
    return (
      <div className="results">
        <ConsumptionData data={data1} />
      </div>
    );
  }
  return (
    <div className="results">
      <ConsumptionData data={data1} />
      <ConsumptionData data={data2} />
      <DifferenceData difference={difference} />
    </div>
  );
};

export default Results;
