import React from 'react';
import Menu from './Menu';

const Home = () => {
  return (
    <>
    <main className="home">
        <div>
            <h1>Burger Shop</h1>
            <p>Give yourself a tasty burger</p>
            <a href="/#" className='button'>Explore Meniu</a>
        </div>
    </main>
    <Menu />
    </>
  )
}

export default Home;
