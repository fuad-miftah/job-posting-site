import { Outlet } from "react-router-dom";
import Navbar from "../component/Common/Navbar";
import Footer from "../component/Common/Footer"

const SharedNav = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    );
}

export default  SharedNav;