function WagonSelector({ wagons, selectedWagon, onSelectWagon }) {
  return (
    <div className="wagon-selector">
      <h2>Оберіть вагон</h2>

      <div className="wagon-buttons">
        {wagons.map((wagon) => (
          <button
            key={wagon.id}
            className={selectedWagon === wagon.id ? "wagon-btn active" : "wagon-btn"}
            onClick={() => onSelectWagon(wagon.id)}
          >
            Вагон {wagon.id}
            <span>{wagon.type}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default WagonSelector;