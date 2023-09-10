import "../assets/styles/navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(): JSX.Element {
  return (
    <nav className="my-navbar flex justify-around pt-4 pb-0 border-y border-neutral-900 md:justify-center md:gap-10">
      <NavLink className="text- uppercase" to="/stats">
        Stats
      </NavLink>
      <NavLink className="text-neutral-500 uppercase" to="/lineup">
        Lineup
      </NavLink>
      <NavLink className="text-white uppercase md:hidden" to="/zones">
        Zones
      </NavLink>
    </nav>
  );
}

export default Navbar;
