import { Outlet } from "react-router";
import Header from '../components/Header';

const RootLayout = () => {
    return (
        <div>
            <Header />
            <div className="mainTest">
            <Outlet />
            </div>
        </div>
    )
}

export default RootLayout;