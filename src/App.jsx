import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import QuotePage from './components/QuotePage';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// Scroll restoration and anchor target scroller helper
const ScrollToHashAndTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's an anchor hash in the URL, wait and scroll to it
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
        return () => clearTimeout(timer);
      }
    } else {
      // Scroll to top on normal page transitions
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const AppContent = ({ theme, toggleTheme }) => {
  return (
    <>
      <ScrollToHashAndTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main style={{ minHeight: 'calc(100vh - var(--header-height))' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </main>
      <FloatingActions />
      <Footer />
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    // Check local storage or system preferences for theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle preloader delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // Wait for alignment calibration animation
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div key="content" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppContent theme={theme} toggleTheme={toggleTheme} />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;
