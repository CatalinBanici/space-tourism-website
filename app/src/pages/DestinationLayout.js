import React, { useState } from "react";
import MoonImage from "../assets/destination/image-moon.png";
import MarsImage from "../assets/destination/image-mars.png";
import EuropaImage from "../assets/destination/image-europa.png";
import TitanImage from "../assets/destination/image-titan.png";
import "../styles/destination.css";

export default function DestinationLayout({ data }) {
  const [destination, setDestination] = useState(data[0]);
  const [image, setImage] = useState(MoonImage);
  const [activeClass, setActiveClass] = useState(0);

  function handleDestination(data, index) {
    setDestination(data[index]);
    setActiveClass(index);
    switch (index) {
      case 0:
        setImage(MoonImage);
        break;
      case 1:
        setImage(MarsImage);
        break;
      case 2:
        setImage(EuropaImage);
        break;
      case 3:
        setImage(TitanImage);
        break;
      default:
        return null;
    }
  }

  return (
    <div className="destination-container">
      <h4 className="destination-title">
        <span aria-hidden="true">01</span>Pick your destination
      </h4>
      <div className="destination-body">
        <div className="destination-image">
          <img src={image} alt={destination.name} />
        </div>
        <div className="destination-details">
          <div>
            <nav className="destination-nav">
              <ul>
                {data.map((item, index) => (
                  <li
                    className={index === activeClass ? "nav-btn-active" : null}
                    key={item.name}
                  >
                    <button onClick={() => handleDestination(data, index)}>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <section className="destination-section">
              <h2 className="destination-name">{destination.name}</h2>
              <p className="destination-description">
                {destination.description}
              </p>
              <hr />
              <div className="destination-extra-details">
                <div className="destination-distance">
                  <h2>Avg. Distance</h2>
                  <h1>{destination.distance}</h1>
                </div>
                <div className="destination-travel">
                  <h2>Est. Travel Time</h2>
                  <h1>{destination.travel}</h1>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
