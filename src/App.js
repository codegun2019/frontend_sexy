import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Cards from './page/Cards';
import Card from './component/Card';
import Navbar from './component/Navbar';
import InstaFeeds from './component/InstaFeeds';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <nav>
          <ul>
            <li>
              <Link to="/CardList">Card List</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>

        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/CardList" element={<Cards />} />
          <Route path="/Card/:id" element={<Card />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
