import { useState } from "react";
import { LOGO_URL } from "../utills/constants";

const Header = () => {
  const [buttonName, setBtnName] = useState("LogIn");

  return (
    <div className="header">
      <div className="logo-container">
        <a href="/">
          <img src={LOGO_URL} className="logo" alt="logo" />
        </a>
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setBtnName(buttonName === "LogIn" ? "LogOut" : "LogIn");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
