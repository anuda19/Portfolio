import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import "./price.css";

const Price = () => {
  return (
    <div className="price_main" id="price">
      <h2>Price</h2>
      <div className="price_cards">
        <div className="card_layout">
          <h3>Basic</h3>
          <div className="price_heading">
            <h5>Single Page</h5>
            <h4 className="price">$10</h4>
          </div>
          <div className="card_data">
            <p>
              <span>
                <IoCheckmarkDoneCircleSharp />
              </span>
              Responsive Design
            </p>
            <p>
              <span>
                <IoCheckmarkDoneCircleSharp />
              </span>
              Domain & Hosting
            </p>
            <p>
              <span>
                <IoCheckmarkDoneCircleSharp />
              </span>
              Customization
            </p>
            <p>
              <span className="cross_icon">
              <ImCross />
              </span>
              Authentication
            </p>
            <p>
              <span className="cross_icon">
                <ImCross />
              </span>
              Database
            </p>
          </div>
          <div className="price_card_btn">
            <button className="card_btn">Order Now</button>
          </div>
        </div>
        <div className="card_layout">
          <h3>Standard</h3>
          <div className="price_heading">
            <h5>Multipage Page</h5>
            <h4 className="price">$20</h4>
          </div>
          <div className="card_data">
            <p>
              <span>
                <IoCheckmarkDoneCircleSharp />
              </span>
              Responsive Design
            </p>
            <p>
              <span>
                <IoCheckmarkDoneCircleSharp />
              </span>
              Domain & Hosting
            </p>
            <p>
              <span>
                <IoCheckmarkDoneCircleSharp />
              </span>
              Customization
            </p>
            <p>
              <span className="cross_icon">
                <ImCross />
              </span>
              Authentication
            </p>
            <p>
              <span>
                <IoCheckmarkDoneCircleSharp />
              </span>
              Database
            </p>
          </div>
          <div className="price_card_btn">
            <button className="card_btn">Order Now</button>
          </div>
        </div>
        <div className="card_layout">
          <h3>Premium</h3>
          <div className="price_heading">
            <h5>Multipage Page</h5>
            <h4 className="price">$30</h4>
          </div>
          <div className="card_data">
            <p>
              <span>
                <IoCheckmarkDoneCircleSharp />
              </span>
              Responsive Design
            </p>
            <p>
              <span>
                <IoCheckmarkDoneCircleSharp />
              </span>
              Domain & Hosting
            </p>
            <p>
              <span>
                <IoCheckmarkDoneCircleSharp />
              </span>
              Customization
            </p>
            <p>
              <span>
                <IoCheckmarkDoneCircleSharp />
              </span>
              Authentication
            </p>
            <p>
              <span>
                <IoCheckmarkDoneCircleSharp />
              </span>
              Database
            </p>
          </div>
          <div className="price_card_btn">
            <button className="card_btn">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
