import React, { useEffect, useState } from "react";
import "./Header.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";

const Header = () => {
//   const [languages, setLanguages] = useState([])
// useEffect(() => {
//    axios
//    .get("https://jsonplaceholder.typicode.com/todos/1")
//    .then((response) => {
//      setLanguages(response);
//      console.log(languages);
//     //  setLoading(false);
//    });
// }, []);


  return (
    <div className="Header">
      <div className="overlay"></div>
      <div className="img-div1">
        <img className="header-img1" src="src/Components/netflix1.png" />
      </div>
      <div className="logobox">
        <img className="header-img2" src="src/Components/netflixlogo.png" />
        <button className="hb1">
         
         <IoLanguage /> English <IoIosArrowDropdownCircle />
        </button>
        <button className="hb2">Sign In</button>
      </div>

      <div className="headerbox">
        <div className="h-txt1">
          Enjoy big movies, hit series and more from ₹ 149.
        </div>
        <div className="h-txt2"> Join today. Cancel anytime.</div>
        <div className="h-txt3">
          {" "}
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="input-div1">
          <input
            className="h-input1"
            type="email"
            placeholder="Email adderss"
          />
          <button className="h-b2">
            Get Started
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
