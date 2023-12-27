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
        <a href="/lista" className="text-reset text-decoration-none">
          lista
          <br />
          wierszy
        </a>
      </li>
      <li className="pt-4 pointer">
        <a href="/kredyty" className="text-reset text-decoration-none">
          prawa
          <br />
          autorskie
        </a>
      </li>
    </ul>
  );
};

export default NavBarList;
