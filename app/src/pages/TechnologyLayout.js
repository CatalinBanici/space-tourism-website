import React, { useState } from "react";
import VehicleImage from "../assets/technology/image-launch-vehicle-portrait.jpg";
import SpacePort from "../assets/technology/image-spaceport-portrait.jpg";
import CapsuleImage from "../assets/technology/image-space-capsule-portrait.jpg";
import "../styles/technology.css";

export default function TechnologyLayout({ data }) {
  const [technology, setTechnology] = useState(data[0]);
  const [image, setImage] = useState(VehicleImage);
  const [activeClass, setActiveClass] = useState(0);

  function handleTechnology(data, index) {
    setTechnology(data[index]);
    setActiveClass(index);
    switch (index) {
      case 0:
        setImage(VehicleImage);
        break;
      case 1:
        setImage(SpacePort);
        break;
      case 2:
        setImage(CapsuleImage);
        break;
      default:
        return null;
    }
  }
  return (
    <div className="technology-container">
      <h4 className="technology-title">
        <span aria-hidden="true">03</span>Space launch 101
      </h4>
      <div className="technology-body">
        <div>
          <nav className="technology-nav">
            <ul>
              {data.map((item, index) => (
                <li key={index}>
                  <button
                    className={index === activeClass ? "nav-btn-active" : null}
                    onClick={() => handleTechnology(data, index)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <section className="technology-section">
            <p>The terminology</p>
            <h3>{technology.name}</h3>
            <p>{technology.description}</p>
          </section>
        </div>
        <div className="technology-image">
          <img src={image} alt={technology.name} />
        </div>
      </div>
    </div>
  );
}
