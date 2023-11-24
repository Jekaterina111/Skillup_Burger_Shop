import React from 'react';
import MenuCard from './MenuCard';
import cheeseBurger from '../../assets/burger1.png';
import vegaBurger from '../../assets/burger2.png';
import burgWithFries from '../../assets/burger3.png';

const Menu = (addToCard) => {
  return (
    <section className="menu">
      <h1>Meniu</h1>
      <div id="menu">
        <MenuCard
          itemNum={1}
          burgerSrc={cheeseBurger}
          price={200}
          title="Cheese Burger"
          handler={addToCard}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={vegaBurger}
          price={500}
          title="Veg Cheese Burger"
          handler={addToCard}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burgWithFries}
          price={1800}
          title="Cheese Burger With French Fries"
          handler={addToCard}
        />
      </div>
    </section>
  );
};

export default Menu;
