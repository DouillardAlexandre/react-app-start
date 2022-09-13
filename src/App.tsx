
import './style/App.css';
import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import env from './env';

import Home from './routes/_home.route';
import React from 'react';

//API
export const instanceRedis = axios.create({
  baseURL: env.REACT_APP_URL_REDIS,
  timeout: 6000,
  headers: {
    'Content-Type' : 'application/json'
  }
})

function App() {  
  return (
  <Suspense fallback="loading">
    <Router>

      <Routes>

        <Route path="/_home" element={<Home/>} />
        
        <Route path="/" element={<Navigate replace to="/_home" />} />
        <Route path="*" element={<Home/>} />
      </Routes>

    </Router>
  </Suspense>
  );
}

export default App;
