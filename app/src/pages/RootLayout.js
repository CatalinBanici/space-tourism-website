import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/main.css";

export default function RootLayout() {
  const [backgroundImage, setBackgroundImage] = useState("");

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setBackgroundImage("home-background");
        break;
      case "/destination":
        setBackgroundImage("destination-background");
        break;
      case "/crew":
        setBackgroundImage("crew-background");
        break;
      case "/technology":
        setBackgroundImage("technology-background");
        break;
      default:
        return null;
    }
  }, [location]);

  return (
    <div className={"app-container " + backgroundImage}>
      <div className="header-main-container">
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
