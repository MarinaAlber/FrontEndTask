import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSun } from "@fortawesome/free-solid-svg-icons";
import {  faMoon } from "@fortawesome/free-regular-svg-icons";

import "./index.scss";

function Header({ toggleTheme, isDark }) {
  return (
    <header className="header">
          <div className="header__title">Where in the world?</div>
          <div className="header__theme-toggle">
            <button className="header__theme-btn btn" onClick={toggleTheme} title="Turn on">
              <FontAwesomeIcon className="header__theme-icon" icon={isDark ? faSun : faMoon} />
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
      
    </header>
  );
}

export default Header;
