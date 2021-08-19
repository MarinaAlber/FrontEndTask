import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";

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
            title="Change Theme"
          >
            <FontAwesomeIcon
              className="header__theme-icon"
              icon={isDark ? faMoon : faSun}
            />
            {isDark ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
