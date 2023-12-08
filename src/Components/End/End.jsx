import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./End.css";
import Faq from "./Faq/Faq";
import InvestorRelations from "../../pages/InvestorRelations";
import Privacy from "../../pages/Privacy";
import SpeedTest from "../../pages/SpeedTest";
import HelpCentre from "../../pages/HelpCentre";
import Jobs from "../../pages/Jobs";

import LegalNotices from "../../pages/LegalNotices";
import Account from "../../pages/Account";
import WaysToWatch from "../../pages/WaysToWatch";
import CorporateInformation from "../../pages/CorporateInformation";
import OnlyOnNetflix from "../../pages/OnlyOnNetflix";
import MediaCentre from "../../pages/MediaCentre";
import TermsOfUse from "../../pages/TermsOfUse";
import ContactUs from "../../pages/ContactUs";

import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import CookiePreference from "../../pages/CookiePreference";

class End extends Component {
  render() {
    return (
      <Router>
        <div className="end">
          <div className="E-txt1">
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <input
            className="E-input1"
            type="email"
            placeholder="Email address"
          />{" "}
          <br />
          <button className="E-b1">
            Get started <IoIosArrowForward />
          </button>
          <ul className="end-header">
            <div className="end-div">
              <div className="div1">
                {" "}
                
                
                <li>
                  <Link to="/Faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/InvestorRelations">Investor Relations</Link>
                </li>
                <li>
                  <Link to="/Privacy">Privacy</Link>
                </li>
                <li>
                  <Link to="/SpeedTest">Speed Test</Link>
                </li>
              </div>
              <div className="div2">
                <li>
                  <Link to="/HelpCentre">Help Centre</Link>
                </li>

                <li>
                  <Link to="/Jobs">Jobs</Link>
                </li>

                <li>
                  <Link to="/CookiePreferences">Cookie Preferences</Link>
                </li>

                <li>
                  <Link to="/LegalNotices">Legal Notices</Link>
                </li>
              </div>

              <div className="div3">
                <li>
                  <Link to="/Account">Account</Link>
                </li>

                <li>
                  <Link to="/WaysToWatch">Ways to Watch</Link>
                </li>
                <li>
                  <Link to="/CorporateInformation">Corporate Information</Link>
                </li>

                <li>
                  <Link to="/OnlyOnNetflix">Only on Netflix</Link>
                </li>
              </div>

              <div className="div4">
                <li>
                  <Link
                    to="/
MediaCentre"
                  >
                    Media Centre
                  </Link>
                </li>
                <li>
                  <Link
                    to="/
TermsOfUse"
                  >
                    Terms of Use
                  </Link>
                </li>

                <li>
                  <Link
                    to="/
ContactUs"
                  >
                    Contact Us
                  </Link>
                </li>
              </div>
            </div>
          </ul>
         
          <Routes>
          
            <Route exact path="/Faq" element={<Faq />}></Route>

            <Route
              exact
              path="/InvestorRelations"
              element={<InvestorRelations />}
            ></Route>

            <Route exact path="/Privacy" element={<Privacy />}></Route>

            <Route exact path="/SpeedTest" element={<SpeedTest />}></Route>

            <Route exact path="/HelpCentre" element={<HelpCentre />}></Route>

            <Route exact path="/Jobs" element={<Jobs />}></Route>

            <Route
              exact
              path="/CookiePreferences"
              element={<CookiePreference/>}
            ></Route>

            <Route
              exact
              path="/LegalNotices"
              element={<LegalNotices />}
            ></Route>

            <Route  path="/Account" element={<Account />}></Route>

            <Route  path="/WaysToWatch" element={<WaysToWatch />}></Route>

            <Route
              exact
              path="/CorporateInformation"
              element={<CorporateInformation />}
            ></Route>

            <Route
              exact
              path="/OnlyOnNetflix"
              element={<OnlyOnNetflix />}
            ></Route>

            <Route exact path="/MediaCentre" element={<MediaCentre />}></Route>

            <Route exact path="/TermsOfUse" element={<TermsOfUse />}></Route>

            <Route exact path="/ContactUs" element={<ContactUs />}></Route>
          </Routes>
          <button className="E-b2">
            <IoLanguage /> English <IoIosArrowDropdownCircle />
          </button>
          <div className="Netflix-end">Netflix India</div>
          </div>
      </Router>
    );
  }
}

export default End;
