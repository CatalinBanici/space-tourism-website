import React, { useState } from "react";
import CommanderImage from "../assets/crew/image-douglas-hurley.png";
import SpecialistImage from "../assets/crew/image-mark-shuttleworth.png";
import PilotImage from "../assets/crew/image-victor-glover.png";
import Engineer from "../assets/crew/image-anousheh-ansari.png";

export default function CrewLayout({ data }) {
  const [crew, setCrew] = useState(data[0]);
  const [image, setImage] = useState(CommanderImage);

  function handleCrew(data, index) {
    setCrew(data[index]);
    switch (index) {
      case 0:
        setImage(CommanderImage);
        break;
      case 1:
        setImage(SpecialistImage);
        break;
      case 2:
        setImage(PilotImage);
        break;
      case 3:
        setImage(Engineer);
        break;
      default:
        return null;
    }
  }
  return (
    <>
      <div>
        <h4>
          <span>02</span>Meet your crew
        </h4>
        <section>
          <h4>{crew.role}</h4>
          <h3>{crew.name}</h3>
          <p>{crew.bio}</p>
        </section>
        <nav>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <button onClick={() => handleCrew(data, index)}>plchldr</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <img src={image} alt={crew.name} />
    </>
  );
}
