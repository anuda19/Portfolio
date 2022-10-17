import React, { useState } from "react";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import "./resume.css";

const Resume = () => {
  const [skill, setSkill] = useState([true, false]);

  const handleExp = () => {
    setSkill([false, true]);
  };

  const handlePro = () => {
    setSkill([true, false]);
  };

  return (
    <div>
      <hr />
      <h2 className="head">My Resume</h2>
      <div className="heading">
        <h5 className={skill[0] ? "active" : "no-active"} onClick={handlePro}>
          Professional Skills
        </h5>
        <h5 onClick={handleExp} className={skill[1] ? "active" : "no-active"}>
          Experience
        </h5>
      </div>
      {skill[0] ? <Skills /> : null}
      {skill[1] ? <Experience /> : null}
    </div>
  );
};

export default Resume;
