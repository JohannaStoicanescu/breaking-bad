<<<<<<< HEAD
import GamePlay from "./components/Gameplay"
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const App = () => {
  
  return (
    
    <div className="app">
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gameplay" element={<GamePlay />} />
      </Routes>
    </Router>
=======
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
>>>>>>> 8c971e66c7cdf71889af3729f6001213d028eb8c
    </div>
    
  );
};

export default App;
