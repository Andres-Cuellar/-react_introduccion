import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

const larnuAPICategories =
  "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(larnuAPICategories)
      .then((res) => setCards(res.data.communityCategories));
  }, []);

  return (
    <div className="App">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            background={card.background}
            icon={card.icon}
            name={card.name}
            quizzes={card.totalQuizzes}
            users={card.users}
          />
        );
      })}
    </div>
  );
}

export default App;
