import { Outlet } from "react-router";

const ContainerLayout = () => {
  return (
    <div
      className="mainContainer"
      style={{
        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/0/0e/Tatry%2C_zimowy_widok.jpg)`,
      }}
    >
      <div className="shadow p-3 pt-5 p-lg-5">
        <Outlet />
      </div>
    </div>
  );
};

export default ContainerLayout;
