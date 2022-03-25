import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Li } from './components/styles/Li';

function App() {
  return (
    <>
      <h1>Welcome to Feed the Animals</h1>
      <ul>
        <Li>
          <Link to="/animals">Click here to see the Animals</Link>
        </Li>
      </ul>
    </>
  );
}

export default App;
