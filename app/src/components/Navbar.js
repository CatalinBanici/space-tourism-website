import { NavLink } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import "../styles/header.css";

export default function Navbar() {
  return (
    <>
      <img src={Logo} alt="Website logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <span aria-hidden="true">00</span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="destination">
              <span aria-hidden="true">01</span>
              <span>Destination</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="crew">
              <span aria-hidden="true">02</span>
              <span>Crew</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="technology">
              <span aria-hidden="true">03</span>
              <span>Technology</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
