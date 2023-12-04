import React from 'react';
import '../../styles/orderDetails.scss';

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order details</h1>
        <div>
          <h1>Shipping</h1>
          <p>Address sida 12-32 dsad</p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>Address sida 12-32 dsadName Stuart</p>
          <b>Phone 2131232123</b>
        </div>
        <div>
          <h1>Status</h1>
          <p>Order Status Processing</p>
          <b>Placed at 23-02-2002</b>
          <b>Delivered At 23-02-2002</b>
        </div>
        <div>
          <h1>Payment</h1>
          <p>Payment Method COD</p>
          <b>Payment Reference #asdasdsadsad</b>
          <b>Paid At 23-02-2003</b>
        </div>
        <div>
          <h1>Amount</h1>
          <p>Items Total ₹2132</p>
          <b>Shippin Charges ₹200</b>
          <b>Tax ₹232</b>
          <b>Total Amount ₹2364</b>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <h4>12 × 232</h4>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <h4>10 × 500</h4>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <h4>10 × 1800</h4>
          </div>
          <div>
            <h4>Sub total</h4>
            <h4>₹2132</h4>
          </div>
        </article>

      </main>
    </section>
  );
};

export default OrderDetails;
