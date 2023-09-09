import { Link } from "react-router-dom";
function Navbar(): JSX.Element {
  return (
    <nav className="flex justify-around py-5 border-y border-gray-900">
      <Link className="text-white uppercase" to="/Stats">
        Stats
      </Link>
      <Link className="text-white uppercase" to="#">
        Lineup
      </Link>
      <Link className="text-white uppercase" to="#">
        Zones
      </Link>
    </nav>
  );
}

export default Navbar;
