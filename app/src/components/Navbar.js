import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import "../styles/header.css";

export default function Navbar() {
  const [toggleNavClass, setToggleNavClass] = useState("nav-close");
  const [toggleButtonClass, setToggleButtonClass] =
    useState("button-hamburger");

  function toggleNav() {
    if (toggleNavClass === "nav-close") {
      setToggleNavClass("nav-open");
    } else {
      setToggleNavClass("nav-close");
    }
    if (toggleButtonClass === "button-hamburger") {
      setToggleButtonClass("button-close");
    } else {
      setToggleButtonClass("button-hamburger");
    }
  }

  return (
    <>
      <img src={Logo} alt="Website logo" />
      <button className={toggleButtonClass} onClick={() => toggleNav()}>
        <span>Menu</span>
      </button>
      <nav className={toggleNavClass}>
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
