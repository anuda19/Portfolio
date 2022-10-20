import React from "react";
import {
  MdBusinessCenter,
  MdDomain,
  MdOutlineDesignServices,
  MdWebAsset,
} from "react-icons/md";
import { CgDigitalocean } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa";
import "./services.css";

const Services = () => {
  return (
    <div>
      <div className="service_heading" id="services">
      <h2>What We Do</h2>
      </div>
      <div className="development">
        <div className="card_content">
          <h4><span><MdWebAsset /></span> Web Development</h4>
          <p>
            We’ll handle everything from to web development process until it is
            time to make your project live.
          </p>
        </div>
        <div className="card_content">
          <h4><span><CgDigitalocean /></span> Digital Marketing</h4>
          <p>
            Digital marketing producing a campaign is costly and time-consuming,
            and there’s no guarantee that it will net you a positive ROI.
          </p>
        </div>
        <div className="card_content">
          <h4><span><FaDatabase /></span> SEO Optimisation</h4>
          <p>
            Your website ranking matters. Our SEO services will help you get to
            the top of the ranks and stay there.
          </p>
        </div>
      </div>
      <div className="services">
        <div className="card_content">
          <h4><span><MdOutlineDesignServices /></span> UI/UX Design</h4>
          <p>
            A UX consultant is responsible for many of the same tasks as a UX
            designer, but they typically.
          </p>
        </div>
        <div className="card_content">
          <h4><span><MdDomain /></span> Domain & Hosting</h4>
          <p>
            Using multiple domains in your content marketing strategy can be a
            great way to support or even start brand new campaigns.
          </p>
        </div>
        <div className="card_content">
          <h4><span><MdBusinessCenter /></span> Business Strategy</h4>
          <p>
            I throw myself down among the tall grass by the stream as Ilie close
            to the earth. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
