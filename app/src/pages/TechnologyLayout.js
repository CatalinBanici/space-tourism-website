import React, { useState } from "react";
import VehicleImage from "../assets/technology/image-launch-vehicle-portrait.jpg";
import SpacePort from "../assets/technology/image-spaceport-portrait.jpg";
import CapsuleImage from "../assets/technology/image-space-capsule-portrait.jpg";

export default function TechnologyLayout({ data }) {
  const [technology, setTechnology] = useState(data[0]);
  const [image, setImage] = useState(VehicleImage);

  function handleTechnology(data, index) {
    setTechnology(data[index]);
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
    <>
      <h4>
        <span>03</span>Space launch 101
      </h4>
      <div>
        <nav>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <button onClick={() => handleTechnology(data, index)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <section>
          <p>The terminology</p>
          <h3>{technology.name}</h3>
          <p>{technology.description}</p>
        </section>
        <img src={image} alt={technology.name} />
      </div>
    </>
  );
}
