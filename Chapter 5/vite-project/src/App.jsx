import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Posts from './Components/Posts';
import Friends from './Components/Friends';
import NoPage from './Components/NoPage';
import Login from './Components/Login';
import Protected from './Components/Protected';
import Dashboard from './Components/Dashboard';
import Search from './Components/Search';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [fade, setFade] = useState(false)

  const handleNavigation = () => {
    setFade(true)
    setTimeout(() => { setFade(false) }, 1000)
  }
  return (
    <div className="logo">
      <div className={`App ${fade ? 'fade' : ''}`}>
        <BrowserRouter>
          <nav>
            <NavLink to="/" onClick={handleNavigation}>Home</NavLink><br />
            <NavLink to="/about" onClick={handleNavigation}>About</NavLink><br />
            <NavLink to="/contact" onClick={handleNavigation}>Contact</NavLink><br />
            <NavLink to="/profile" onClick={handleNavigation}>Profile</NavLink><br />
            <NavLink to="/login" onClick={handleNavigation}>Login</NavLink><br />
            <NavLink to="/dashboard" onClick={handleNavigation}>Dashboard</NavLink><br />
            <NavLink to="/search" onClick={handleNavigation}>Search</NavLink>
          </nav>

          <Routes>
            {/* Public Routes */}
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/search" element={<Search />} />

            {/* Protected Routes */}
            <Route
              path="/profile"
              element={<Protected Component={Profile} isAuthenticated={isAuthenticated} />}
            />
            <Route
              path="/dashboard"
              element={<Protected Component={Dashboard} isAuthenticated={isAuthenticated} />}
            />
            <Route path="/profile/:name" element={<Profile />}>
              <Route path="posts" element={<Posts />} />
              <Route path="friends" element={<Friends />} />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
