import React from 'react';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { IoFastFoodSharp } from "react-icons/io5";
import DropdownMenu from './DropdownMenu';


const Header = ({ isAuthenticated = false }) => {
  return (
    <>
    <header>
        <nav>
        <div className="icon-container">
              <IoFastFoodSharp />
        </div>
        <div>
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
        </nav>
        </header>
      </>
  )
}

export default Header;
