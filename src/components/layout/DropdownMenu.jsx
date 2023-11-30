import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { id: 1, name: 'Login', path: '/login' },
      { id: 2, name: 'Orders', path: '/myorders' },
      { id: 3, name: 'Logout', path: '/login' },
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div className="container">
      <div className="btn-group" id="my-btn-group">
        <button
          type="button"
          id="myBtn"
          className="btn dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-display="static"
          aria-expanded="false"
        >
          Menu
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {navLinks.map((d) => (
            <li key={d.id}>
              <Link to={d.path}>
                <button className="dropdown-item" type="button">
                  {d.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
