import { useState } from "react";
import NavBarList from "./NavBarList";
import Logo from "../assets/favicon.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleNavBarClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="header">
      <img src={Logo} alt="Wiersze o Tatrach" className="logo" />
      <nav className="navBar p-4 pt-5">
        <NavBarList handleNavBarClick="" className="largeNav" />
        <div className="d-lg-none">
          <p onClick={() => handleNavBarClick()} className="pointer position-absolute navBarToggle">
            Elo
          </p>
          <div className={isVisible ? "position-relative" : "d-none"}>
            <NavBarList
              handleNavBarClick={() => handleNavBarClick()}
              className="smallNav d-flex flex-column flex"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
