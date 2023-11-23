import React from 'react';
import { motion } from 'framer-motion';
import me from '../../assets/skj.jpg';

const Founder = () => {
  return (
    <section className="founder">
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <div className="img-container">
          <img src={me} alt="Founder" />
          <h3>Nelson</h3>
        </div>
        <div className="content">
          <h1 className="title">Founder</h1>
          <p>
            Hey, Everyone I am Nelson, the founder of Burger Shop.
          </p>
          <p>
            Our aim is to create the most tasty burger on planet.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Founder;
