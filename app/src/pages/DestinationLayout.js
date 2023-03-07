import React, { useState } from "react";
import MoonImage from "../assets/destination/image-moon.png";
import MarsImage from "../assets/destination/image-mars.png";
import EuropaImage from "../assets/destination/image-europa.png";
import TitanImage from "../assets/destination/image-titan.png";

export default function DestinationLayout({ data }) {
  const [destination, setDestination] = useState(data[0]);
  const [image, setImage] = useState(MoonImage);

  function handleDestination(data, index) {
    setDestination(data[index]);
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
    <>
      <h4>Pick your destination</h4>
      <div>
        <img src={image} alt={destination.name} />
        <div>
          <nav>
            <ul>
              {data.map((item, index) => (
                <li key={item.name}>
                  <button onClick={() => handleDestination(data, index)}>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <section>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <hr />
            <div>
              <div>
                <h2>Average Distance</h2>
                <h1>{destination.distance}</h1>
              </div>
              <div>
                <h2>Est. Travel Time</h2>
                <h1>{destination.travel}</h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
