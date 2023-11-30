import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import burger from '../../assets/burger2.png';
import '../../styles/contact.scss';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlerSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="contact">
      <form>
        <h2>Contact Us</h2>
        <input
          type="text"
          placeholder="Guest01"
        />
        <input
          type="text"
          id="email"
          placeholder="guest01@xyz.com"
        />
        <textarea id="feedback" rows="10" cols="50" placeholder="Feedback from Guest01" />
        <Popup
          open={showPopup}
          onClose={() => setShowPopup(false)}
          trigger={(
            <button type="button" onClick={handlerSubmit}>
              Send
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
            Thank you for contacting us! We will get back to you shortly.
          </div>
        </Popup>
      </form>
      <div className="formBorder">
        <div>
          <img src={burger} alt="burger" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
