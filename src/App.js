import GamePlay from "./components/GamePlay";
import BurgerQuiz from "./components/BurgerQuiz";
import Home from "./Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<GamePlay />} />
          <Route path="/game" element={<BurgerQuiz />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
