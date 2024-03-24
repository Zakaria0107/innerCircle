import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route index element={<App />} />
        <Route path="/contact" element={<Contact />} />
       
    </Routes>
  </BrowserRouter>
);

