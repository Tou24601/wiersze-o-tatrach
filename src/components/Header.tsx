import { useState } from "react";
import NavBarList from "./NavBarList";
import Logo from "../assets/tatry.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleNavBarClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header className="header">
      <Link to="/" className="">
        <img src={Logo} alt="Wiersze o Tatrach" className="logo" />
      </Link>
      <nav className="navBar p-4 pt-5">
        <NavBarList className="largeNav" />
        <div className="d-lg-none">
          <p
            onClick={() => handleNavBarClick()}
            className="pointer position-absolute navBarToggle"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#757575" }} />
          </p>
          <div
            className={isVisible ? "position-relative" : "d-none"}
            onClick={() => handleNavBarClick()}
          >
            <NavBarList className="smallNav d-flex flex-column flex" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
