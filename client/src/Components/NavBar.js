import React from 'react';
import { useDarkMode } from '../Hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(true)
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Womens World Soccor Players</h1>
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;