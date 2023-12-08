import React from "react";
import "./Center.css";
const Center = () => {
  return (
    <div className="center">
      <hr />
      <div className="c-textbox">
        <div className="c-txt1">Enjoy on your TV</div>
        <div class="video1">
          <video video width="400" loop>
            <source src="src/Components/Center/ad.mp4" />
          </video>
        </div>
        <img className="c-img1" src="src/Components/Center/tv2.png" />
        <div className="c-txt2">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </div>
      </div>
    </div>
  );
};

export default Center;
