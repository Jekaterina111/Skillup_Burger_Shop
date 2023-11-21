import React, { useState } from 'react';
import Menu from './Menu';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <main className="home">
        <div>
          <h1>Burger Shop</h1>
          <p>Give yourself a tasty burger</p>
          <a
            href="/#"
            className="button"
            data-bs-toggle="collapse"
            aria-expanded={isOpen ? 'true' : 'false'}
            onClick={handleClick}
          >
            Explore Meniu
          </a>
        </div>
      </main>
      {isOpen && <Menu />}
    </>
  );
};

export default Home;
