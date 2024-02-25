import { Link } from "react-router-dom";

interface Props {
  className: string;
}

const NavBarList = ({ className }: Props) => {
  return (
    <ul className={className}>
            <li className="pt-4 pointer">
        <Link to="/about" className="text-reset text-decoration-none">
          o stronie
        </Link>
      </li>
      <li className="pt-4 pointer">
        <Link to="/" className="text-reset text-decoration-none">
          mapa
        </Link>
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
