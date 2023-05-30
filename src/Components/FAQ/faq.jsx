import React, { useState } from "react";
import "./faq.css";

const Accordion = ({ index, title, content }) => {
  const [isActive, setIsActive] = useState(false);

  if (index === 1) {
    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && (
          <div className="accordion-content">
            You are required to register for our event on
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: "#37abbc" }}
              href="https://devsoc23.codechefvit.com/signup"
            >
              {" "}
              DEVSOC registrations portal{" "}
            </a>{" "}
            where you will be asked for basic details and for your github
            profile (if applicable). You're also required to register on VTOP
            under the "Event Registration" tab. You can simply search "DEVSOC"
            in the search tab and register for the same. Also join the discord
            link on the bottom right of this website. <br /> <br /> After
            registration you will be required to submit a document outlining the
            idea your team will be pursuing during the hackathon. Following the
            idea submission you will be eligible to attend the hackathon.
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    );
  }
};

export default Accordion;
