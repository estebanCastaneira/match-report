import { Link } from "react-router-dom";
function Navbar(): JSX.Element {
  return (
    <nav className="flex justify-around py-4 border-y border-neutral-900">
      <Link className="text-white uppercase" to="/stats">
        Stats
      </Link>
      <Link className="text-white uppercase" to="/lineup">
        Lineup
      </Link>
      <Link className="text-white uppercase" to="#">
        Zones
      </Link>
    </nav>
  );
}

export default Navbar;
