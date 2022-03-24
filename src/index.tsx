import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Animals } from './components/Animals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InfoAnimal } from './components/InfoAnimal';
import { Layout } from './components/Layout';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          {/* tog bort app */}
          <Route index element={<App />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/animals/:id" element={<InfoAnimal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
