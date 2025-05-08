import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Emblem from './pages/Emblem';
import History from './pages/History';
import Current from './pages/Current';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/emblem" element={<Emblem />} />
      <Route path="/history" element={<History />} />
      <Route path="/current" element={<Current />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
