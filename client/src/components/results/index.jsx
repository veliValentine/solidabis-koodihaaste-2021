import ConsumptionData from './Consumptiondata';
import DifferenceData from './DifferenceData';

const Results = ({ data1, data2, difference }) => {
  const noData = !data1;
  if (noData) {
    return null;
  }
  const noComparison = data1 && (!data2 || !difference);
  if (noComparison) {
    return <ConsumptionData data={data1} />;
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
