import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Utility Components
import ScrollToTop from './components/utils/ScrollToTop';
import CustomCursor from './components/utils/CustomCursor';

function App() {
  return (
    <Router>
      <CustomCursor />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="leistungen" element={<Services />} />
            <Route path="ueber-uns" element={<About />} />
            <Route path="kontakt" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;