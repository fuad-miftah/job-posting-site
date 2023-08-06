import { NavLink } from "react-router-dom";
import Logo from "../Images/logo.jpg";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-[#00917c] border-t-0 border-r-0 border-b border-l-0 border-[#d9d9d9]/80">
      <img src={Logo} className="w-14 h-12 object-none" />

      <div className="hidden md:flex justify-start items-start gap-6">
        <NavLink
          to="/"
          exact
          className={({ isActive }) =>
            isActive
              ? "text-blue-800"
              : "text-base font-medium text-left text-white hover:text-blue-800"
          }
          activeClassName="text-blue-800"
        >
          Home
        </NavLink>
        <NavLink
          to="/job"
          className={({ isActive }) =>
            isActive
              ? "text-blue-800"
              : "text-base font-medium text-left text-white hover:text-blue-800"
          }
          activeClassName="text-blue-800"
        >
          Jobs
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive
              ? "text-blue-800"
              : "text-base font-medium text-left text-white hover:text-blue-800"
          }
          activeClassName="text-blue-800"
        >
          About Us
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            isActive
              ? "text-blue-800"
              : "text-base font-medium text-left text-white hover:text-blue-800"
          }
          activeClassName="text-blue-800"
        >
          Contact Us
        </NavLink>
      </div>
      <div className="md:hidden">
        {/* Add mobile menu button here */}
      </div>
    </div>
  );
}

export default Navbar;