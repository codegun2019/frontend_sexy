import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Cards from './page/Cards';
import Card from './component/Card';
import Navbar from './component/Navbar';
import InstaFeeds from './component/InstaFeeds';

function App() {
  return (
    <div>
      <Router>
      <header className="App-header">
        <Navbar />
      </header>

        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/CardList" element={<Cards />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
