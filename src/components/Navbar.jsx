import React from "react";
import DHIlab from "./DHIlab/DHIlab";

const Navbar = () => {
  let isArrayFunction = (inputArray) => {
    if (Array.isArray(inputArray) && inputArray.length !== 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div id="Navbar">
      <div className="usa-overlay"></div>
      <header className="usa-header usa-header--basic usa-header--megamenu padding-bottom-4 padding-top-6">
        <div className="usa-nav-container">
          <div className="usa-navbar" style={{width: "60%"}}>
            <div className="usa-logo margin-0" id="basic-mega-logo">
              <em className="usa-logo__text">
                <div className="display-flex flex-row align-items-center">
                  <a href="https://dhilab.com/" title="Home" aria-label="Home">
                    {/* <img src="/public/logo512.png" /> */}
                    <img src="public/logo512.png" alt="" />
                  </a>
                  <h3 className="display-inline-block padding-left-1">Medical Drugs Explorer</h3>
                </div>
              </em>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
