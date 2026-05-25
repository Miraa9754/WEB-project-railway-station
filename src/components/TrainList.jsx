import TrainCard from "./TrainCard";

function TrainList({ trains }) {
  if (trains.length === 0) {
    return <p className="empty-message">Рейсів не знайдено.</p>;
  }

  return (
    <div className="train-list">
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}

export default TrainList;