import React, { useState } from "react";
import CommanderImage from "../assets/crew/image-douglas-hurley.png";
import SpecialistImage from "../assets/crew/image-mark-shuttleworth.png";
import PilotImage from "../assets/crew/image-victor-glover.png";
import Engineer from "../assets/crew/image-anousheh-ansari.png";
import "../styles/crew.css";

export default function CrewLayout({ data }) {
  const [crew, setCrew] = useState(data[0]);
  const [image, setImage] = useState(CommanderImage);
  const [activeClass, setActiveClass] = useState(0);

  function handleCrew(data, index) {
    setCrew(data[index]);
    setActiveClass(index);
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
    <div className="crew-container">
      <div className="crew-body">
        <div>
          <h4 className="crew-title">
            <span aria-hidden="true">02</span>Meet your crew
          </h4>
          <section className="crew-section">
            <h4>{crew.role}</h4>
            <h3>{crew.name}</h3>
            <p>{crew.bio}</p>
          </section>
          <nav className="crew-nav">
            <ul>
              {data.map((item, index) => (
                <li key={index}>
                  <button
                    className={index === activeClass ? "nav-btn-active" : null}
                    onClick={() => handleCrew(data, index)}
                  ></button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="crew-image">
        <img src={image} alt={crew.name} />
      </div>
    </div>
  );
}
