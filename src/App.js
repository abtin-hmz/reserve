// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import AdminPage from './pages/AdminPage';
import ResourcePage from './pages/ResourcePage';
import LogoutPage from './pages/LogOut';
import ThemeProvider from './ThemeProvider';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState('ltr');
  const dummyUser = {
    email: 'user@example.com',
    password: 'password123',
  };

  useEffect(() => {
    // Update direction based on language
    if (i18n.language === 'fa') {
      setDirection('rtl');
      document.body.dir = 'rtl';
    } else {
      setDirection('ltr');
      document.body.dir = 'ltr';
    }
  }, [i18n.language]);

  return (
    <ThemeProvider direction={direction}>
      <Router>
        <Navigation isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            path="/login"
            element={
              isLoggedIn ? <Navigate to="/resources" /> : <LoginPage onLogin={() => setIsLoggedIn(true)} dummyUser={dummyUser} />
            }
          />
          <Route
            path="/signup"
            element={
              isLoggedIn ? <Navigate to="/resources" /> : <SignUpPage onSignUp={() => setIsLoggedIn(true)} />
            }
          />
          <Route
            path="/admin"
            element={
              isLoggedIn ? <AdminPage /> : <Navigate to="/login" />
            }
          />
          <Route path="/resources" element={<ResourcePage />} />
          <Route
            path="/logout"
            element={
              <LogoutPage onLogout={() => setIsLoggedIn(false)} />
            }
          />
          <Route path="/" element={<Navigate to="/login" />} /> {/* Default route */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
