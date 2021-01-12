import React from "react";
import "./Header.css";

function Header() {
  return (
    <div class="app-header">
      <div className="header-wrapper">
        <div className="header-log">
          <p>Logo</p>
        </div>
        <div className="header-button homePage">
          <p>HomePage</p>
        </div>
        <div className="header-button flolowing">
          <p>Flowing</p>
        </div>
        <div className="header-search">
          <div className="header-searchContainer">
            <p>SearchIcons</p>
            <form>
              <input type="text"></input>
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div className="header-menuItems"></div>
        <p>Icons</p>
        <p>Icons</p>
        <p>Icons</p>
        <p>Icons</p>
      </div>
    </div>
  );
}

export default Header;
