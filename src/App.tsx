import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <ul>
      <li>
        <Link to="/animals">Animals</Link>
      </li>
    </ul>
  );
}

export default App;
