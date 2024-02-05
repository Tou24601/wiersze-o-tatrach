import { Outlet } from "react-router";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
