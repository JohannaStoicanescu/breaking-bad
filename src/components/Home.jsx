import React from 'react'
import GamePlay from './Gameplay'
import "./Home.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <button className="buttonHome"><Link to="/gameplay"> Test me .. I'm a danger!</Link></button>
    </div>
  )
}

export default Home