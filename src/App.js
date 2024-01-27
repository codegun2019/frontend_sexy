import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Card from './page/Card';
import CardList from './component/Cardlist';
import InstaFeeds from './component/InstaFeeds';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/CardList">Card List</Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>

        <Routes>
          <Route path="/CardList" element={<Card />} />
          <Route path="/InstaFeeds" element={<InstaFeeds />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
