import { BsFillPersonFill } from "react-icons/bs";
import "./index.css";

const Header = () => {
  return (
    <nav>
      <div className="logo-container">
        <a href="/">
          <img
            src="https://res.cloudinary.com/dp1mqbttv/image/upload/v1690091784/as_flights_ljr1eq.png"
            alt="as flights"
            className="logo"
          />
        </a>
      </div>
      <ul className="menu-container">
        <li className="menu-item">My Bookings</li>
        <li className="menu-item">Help</li>
        <li className="menu-item">Services</li>
        <li className="menu-item">
          <button className="login-btn">
            <BsFillPersonFill /> <p>Log in</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
