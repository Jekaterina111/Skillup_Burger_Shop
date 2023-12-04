import React from 'react';
import { Country, State } from 'country-state-city';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import '../../styles/shipping.scss';

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div className="input-container">
            <label htmlFor="house">H.No.</label>
            <input id="house" type="text" placeholder="Enter House No." />
          </div>
          <div className="input-container">
            <label htmlFor="city">City</label>
            <input id="city" type="text" placeholder="Enter City" />
          </div>
          <div className="input-container">
            <label htmlFor="country">Country</label>
            <select>
              <option id="country" value="">Country</option>
              {Country
               && Country.getAllCountries().map((country) => (
                 <option key="{country.isoCode}" value="{country.isoCode}">
                   {country.name}
                 </option>
               ))}
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="state">State</label>
            <select>
              <option id="state" value="">State</option>
              {State
               && State.getStatesOfCountry('IN').map((state) => (
                 <option key="{state.isoCode}" value="{state.isoCode}">
                   {state.name}
                 </option>
               ))}
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="pincode">Pin Code</label>
            <input id="pincode" type="number" placeholder="Enter Pincode" />
          </div>
          <div className="input-container">
            <label htmlFor="telNumber">Contact</label>
            <input id="telNumber" type="number" placeholder="Enter Tel Number" />
          </div>
          <div className="button-container">
            <Popup
              trigger={
                <Link to="/shipping">Confirm Order</Link>
              }
              position="right center"
            >
              <div style={{
                color: 'red',
                position: 'absolute',
                top: '50%',
                right: '100%',
                width: '10rem',
                textAlign: 'center',
                transform: 'translateY(-50%)',
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}
              >
                Order Placed
              </div>
            </Popup>
          </div>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
