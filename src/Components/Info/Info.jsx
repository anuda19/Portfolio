import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
  FaFacebookSquare,
  FaGithub,
  FaInfoCircle,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import dp from "../../Assets/ProfileImg.jpeg";
import "./info.css";

const Info = () => {
  return (
    <>
      <div className="blur">
        <h1>h</h1>
      </div>
      <div className="info_background">
      <div className="info_main">
        <div className="profile_image">
          <img
            src={dp}
            alt="profile_image"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="personal_info">
          <h6>
            <span>
              <FaPhoneAlt />
            </span>{" "}
            8434304475
          </h6>
          <h6>
            <span>
              <FaInfoCircle />
            </span>{" "}
            info@dgserves.in
          </h6>
          <h6>
            <span>
              <HiOutlineMail />
            </span>{" "}
            anuragsinha120@gmail.com
          </h6>
        </div>
        <div className="social">
          <h6>
            <span>
              <FaFacebookSquare />
            </span>
            Facebook
          </h6>
          <h6>
            <span>
              <FaInstagram />
            </span>{" "}
            Instagram{" "}
          </h6>
          <h6>
            <span>
              <FaLinkedin />
            </span>{" "}
            Linkedin{" "}
          </h6>
          <h6>
            <span>
              <FaGithub />
            </span>{" "}
            Github{" "}
          </h6>
        </div>
      </div>
      </div>
    </>
  );
};

export default Info;
