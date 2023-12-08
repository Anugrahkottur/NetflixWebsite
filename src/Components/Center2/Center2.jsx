import React from "react";
import "./Center2.css";
import { FaDownload } from "react-icons/fa";
const Center2 = () => {
  return (
    <div className="center2">
      <hr />
      <div className="c2-textbox">
        <img className="c2-img1" src="src/Image/mobile2.png" />
        <div className="thing"><img className="c2-img2" src="src/Image/stranger.png"/><div className="c2-txt3"><div className="stranger">Stranger Things </div><div className="c2-txt4">Downloading...</div></div><div className="c-icon1"><FaDownload /></div></div>
        <div className="txtbox"><div className="c2-txt1">
        Download your shows to watch offline
        </div>
        <div className="c2-txt2">
        Save your favourites easily and always have something to watch.
        </div></div>
      </div>
    </div>
  );
};

export default Center2;
