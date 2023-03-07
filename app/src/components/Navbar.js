import { NavLink } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";

export default function Navbar() {
  return (
    <>
      <img src={Logo} alt="Website logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <span>00</span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="destination">
              <span>01</span>
              <span>Destinations</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="crew">
              <span>02</span>
              <span>Crew</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="technology">
              <span>03</span>
              <span>Technology</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
