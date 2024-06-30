import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Overview from './components/Overview';
import About from './components/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow p-4">
            <Routes>
              <PrivateRoute path="/overview" element={<Overview />} />
              <PrivateRoute path="/about" element={<About />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
