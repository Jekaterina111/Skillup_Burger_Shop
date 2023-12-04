import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';
import '../../styles/cart.scss';

const CartItem = ({
  value = 0, title, img, increment, decrement,
}) => {
  return (
    <div className="cartItem">
      <div>
        <h4 className="cart-title">{title}</h4>
        <img src={img} alt="Item" />
      </div>
      <div>
        <button type="button" onClick={() => decrement()}>-</button>
        <input type="number" value={value} readOnly />
        <button type="button" onClick={() => increment()}>+</button>
      </div>
    </div>
  );
};

const Cart = () => {
  const products = [
    {
      id: 1, title: 'Cheese Burger', img: burger1, counter: 0, price: 200,
    },
    {
      id: 2, title: 'Veg Cheese Burger', img: burger2, counter: 0, price: 500,
    },
    {
      id: 3, title: 'Cheese Burger With French Fries', img: burger3, counter: 0, price: 1800,
    },
  ];

  const [counter, setCounter] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  const increment = ({ id, price }) => {
    const count = counter[id] ?? 0;
    const newTotalPrice = totalPrice + price;

    setCounter((prevCounter) => ({ ...prevCounter, [id]: count + 1 }));
    setTotalPrice(newTotalPrice);
    setSubTotal(newTotalPrice * 0.18);
  };

  const decrement = ({ id, price }) => {
    const count = counter[id] ?? 0;
    const newTotalPrice = totalPrice - price;

    setCounter((prevCounter) => ({ ...prevCounter, [id]: count - 1 }));
    setTotalPrice(newTotalPrice);
    setSubTotal(newTotalPrice * 0.18);
  };
  return (
    <section className="cart">
      <main>
        {products.map((product) => (
          <CartItem
            key={product.id}
            title={product.title}
            img={product.img}
            increment={() => increment(product)}
            value={counter[product.id]}
            decrement={() => decrement(product)}
          />
        ))}

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>
              ₹
              {totalPrice}
            </p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>
              ₹
              {subTotal}
            </p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>
              ₹
              {200}
            </p>
          </div>
          {' '}
          <div>
            <h4>Total</h4>
            <p>
              ₹
              {subTotal + totalPrice + 200}
            </p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
