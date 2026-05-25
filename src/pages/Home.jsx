import { useState } from "react";
import TrainList from "../components/TrainList";
import { trains } from "../data/trains";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTrains = trains.filter((train) => {
    const query = searchQuery.toLowerCase();

    return (
      train.number.toLowerCase().includes(query) ||
      train.from.toLowerCase().includes(query) ||
      train.to.toLowerCase().includes(query)
    );
  });

  return (
    <main className="page">
      <section className="hero">
        <h1>Система продажу залізничних квитків</h1>
        <p>
          Оберіть потрібний рейс, перегляньте маршрут і перейдіть до бронювання
          квитків.
        </p>
      </section>

      <section className="search-section">
        <input
          type="text"
          placeholder="Пошук за номером потяга або маршрутом..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </section>

      <TrainList trains={filteredTrains} />
    </main>
  );
}

export default Home;