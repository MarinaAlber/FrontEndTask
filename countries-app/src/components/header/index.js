import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

import "./styles.scss";

function Header({ toggleTheme, isDark }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__title">Where in the world?</div>
        <div className="header__theme-toggle">
          <button
            className="header__theme-btn btn"
            onClick={toggleTheme}
            title="Turn on"
          >
            <FontAwesomeIcon
              className="header__theme-icon"
              icon={isDark ? faSun : faMoon}
            />
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
