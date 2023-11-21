import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Founder from '../home/Founder';

const About = () => {
  return (
    <section className="about">
      <main>
        <div className="about-container">
          <h1>About Us</h1>
        </div>
        <article>
          <div className="content-container">
            <h4>Burger Shop</h4>
            <p>This is Burger Shop. The place for most burgers on the enitre earth.</p>
            <p>Explore the various type of food and burgers.Clisk below to see the meniu</p>
            <a href="/" aria-hidden="true"><FaSearch /></a>
          </div>
        </article>
        <Founder />
      </main>
    </section>
  );
};

export default About;
