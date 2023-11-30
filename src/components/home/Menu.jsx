import React from 'react';
import MenuCard from './MenuCard';
import cheeseBurger from '../../assets/burger1.png';
import vegaBurger from '../../assets/burger2.png';
import burgWithFries from '../../assets/burger3.png';

const Menu = () => {
  return (
    <section className="menu">
      <h1>Meniu</h1>
      <div id="menu">
        <MenuCard
          id={1}
          itemNum={1}
          burgerSrc={cheeseBurger}
          price={200}
          title="Cheese Burger"
          addToCard={1}
        />
        <MenuCard
          id={2}
          itemNum={2}
          burgerSrc={vegaBurger}
          price={500}
          title="Veg Cheese Burger"
          addToCard={2}
        />
        <MenuCard
          id={3}
          itemNum={3}
          burgerSrc={burgWithFries}
          price={1800}
          title="Cheese Burger With French Fries"
          addToCard={3}
        />
      </div>
    </section>
  );
};

export default Menu;
