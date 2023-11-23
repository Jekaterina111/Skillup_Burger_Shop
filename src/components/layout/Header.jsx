import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { TfiMenu } from 'react-icons/tfi';
import { IoFastFoodSharp } from 'react-icons/io5';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <div className="icon-container">
          <IoFastFoodSharp />
        </div>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">
            <div className="icon-container">
              <GiShoppingCart />
            </div>
          </Link>
          <DropdownMenu />
        </div>
        <div className="hamburger-menu icon-container" aria-hidden="true" onClick={toggleMenu}>
          <TfiMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
