import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

export default function HomeLayout() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <section className="home-section-container">
        <div>
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </section>
      <div className="button-container">
        <button onClick={() => navigate("/destination")}>Explore</button>
      </div>
    </div>
  );
}
