import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Popup from 'reactjs-popup';

const MenuCard = ({
  itemNum, burgerSrc, price, title, delay = 0.2,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const handler = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  return (
    <motion.div
      className="menuCard"
      initial={{
        x: '-100%',
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div />
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <h5>
          ₹
          {price}
        </h5>
        <p>{title}</p>
        <Popup
          open={showPopup}
          onClose={() => setShowPopup(false)}
          trigger={(
            <button type="submit" onClick={() => handler(itemNum)}>
              Buy Now
            </button>
        )}
        >
          <div style={{
            color: 'red',
            transform: 'translate(0%,-500%)',
            backgroundColor: '#fff',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          }}
          >
            Added to cart!
          </div>
        </Popup>
      </main>
    </motion.div>
  );
};

export default MenuCard;
