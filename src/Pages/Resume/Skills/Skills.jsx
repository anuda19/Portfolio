import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress, SiFirebase, SiMongodb } from "react-icons/si";
import SingleSkill from "../SingleSkill/SingleSkill";
import "./skills.css";

const Skills = () => {
  const frontEndSkillArr = [
    {
      heading: "HTML5",
      width: "90%",
      icon: <FaHtml5 />,
    },
    {
      heading: "CSS3",
      width: "80%",
      icon: <FaCss3Alt />,
    },
    {
      heading: "JAVASCRIPT",
      width: "70%",
      icon: <TbBrandJavascript />,
    },
    {
      heading: "REACT",
      width: "60%",
      icon: <FaReact />,
    },
    {
      heading: "BOOTSTRAP",
      width: "70%",
      icon: <FaBootstrap />,
    },
  ];

  const backEndSkillArr = [
    {
      heading: "MONGODB",
      width: "60%",
      icon: <SiMongodb />,
    },
    {
      heading: "EXPRESS JS",
      width: "50%",
      icon: <SiExpress />,
    },
    {
      heading: "NODE JS",
      width: "40%",
      icon: <FaNodeJs />,
    },
    {
      heading: "FIREBASE",
      width: "60%",
      icon: <SiFirebase />,
    },
    {
      heading: "GIT",
      width: "70%",
      icon: <FaGitAlt />,
    },
  ];

  return (
    <div className="skill">
      <div className="front_end_skill">
        <h2>Frontend Skills</h2>
        {frontEndSkillArr.map((skill) => {
          const { heading, width, icon } = skill;
          return (
            <div>
              <SingleSkill heading={heading} width={width} icon={icon} />
            </div>
          );
        })}
      </div>
      <div className="backend_skill">
        <h2>Backend Skills</h2>
        {backEndSkillArr.map((skill) => {
          const { heading, width, icon } = skill;
          return <SingleSkill heading={heading} width={width} icon={icon} />
        })}
      </div>
    </div>
  );
};

export default Skills;
