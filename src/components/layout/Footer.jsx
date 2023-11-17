import React from 'react';
import { CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer>
    <div>
    <h2>Burger Shop</h2>
    <p>We are trying to give you the best taste possible.</p>
    <p><em>We give attention to genuine feedback.<strong>All right received @burgershop</strong></em></p>
    </div>
    <aside>
        <h4>Follow Us</h4>
        <a href="/#"><CiYoutube /></a>
        <a href="/#"><FaInstagram /></a>
        <a href="/#"><VscGithub /></a>
    </aside>
    </footer>
   
  );
};

export default Footer;
