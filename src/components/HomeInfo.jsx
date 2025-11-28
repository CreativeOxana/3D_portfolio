import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const Infobox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Oxana</span> 👋
      <br />A Frontend Developer from the Czech Republic.
    </h1>
  ),
  2: (
    <Infobox
      text="Worked on many projects and picked up many skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <Infobox
      text="Curious to see my work? Check out my portfolio"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <Infobox
      text="Need a project done or looking for a developer? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's connect"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
