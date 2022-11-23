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
    </div>
    
  );
};

export default App;
