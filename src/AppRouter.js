// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home/Home';
import Part1 from './part-1/App';
import Part2 from './part-2/App';
import Part3 from './part-3/App';
// import Contact from './Contact/Contact';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path="/part-1" element={<Part1/>} />
        <Route path="/part-2" element={<Part2/>} />
        <Route path="/part-3" element={<Part3/>} />
        {/* <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
