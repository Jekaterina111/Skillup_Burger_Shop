import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';

import Profile from './components/profile/Profile';
// Add module imports for MY ORDERS

import About from './components/about/About';
import './styles/app.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/dropdownMenu.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import './styles/profile.scss';
import './styles/table.scss';
import './styles/orderDetails.scss';
import './styles/about.scss';

const App = () => {
  return (
    <Router>
      <Header isAuthenticated="true" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
