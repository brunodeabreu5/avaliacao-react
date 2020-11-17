import { Link } from "react-router-dom";
import "./index.css";

function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link className="menu" to="/LandingPage1">
          Home
        </Link>
      </li>
      <li>
        <Link className="menu" to="/LandingPage2">
          News
        </Link>
      </li>
      <li>
        <Link className="menu" to="/LandingPage3">
          Contact
        </Link>
      </li>
      <li>
        <Link className="menu" to="/LandingPage4">
          About
        </Link>
      </li>
    </ul>
  );
}
export default Menu;
