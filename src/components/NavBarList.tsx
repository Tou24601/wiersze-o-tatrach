import { Link } from "react-router-dom";

interface Props {
  handleNavBarClick: any;
  className: string;
}

const NavBarList = ({ handleNavBarClick, className }: Props) => {
  return (
    <ul onClick={() => handleNavBarClick} className={className}>
      <li className="pt-4 pointer">
        <a href="/" className="text-reset text-decoration-none">
          mapa
        </a>
      </li>
      <li className="pt-4 pointer">
        <Link to="/lista" className="text-reset text-decoration-none">
          lista
          <br />
          wierszy
        </Link>
      </li>
      <li className="pt-4 pointer">
        <Link to="/kredyty" className="text-reset text-decoration-none">
          prawa
          <br />
          autorskie
        </Link>
      </li>
    </ul>
  );
};

export default NavBarList;
