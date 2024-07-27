import React from "react";
import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar(props) {
  // const handleOpenMenu = (event, id) => {
  //   // Store clicked element (to anchor the menu to)
  //   // and the menu id so we can tell which menu is open.
  //   setMenuState({ anchor: event.currentTarget, id });
  // };

  // const handleCloseMenu = () => {
  //   setMenuState(null);
  // };
  return (
    <div>
      {/*  Nav Bar */}
      <nav className="navbar navbar-expand-lg">
        <span className="navbar-brand brand">
          <span className="g-logo">M</span>usic H<span className="i-logo">i</span>ts
        </span>

        <div className="navbar-collapse" id="collapsedMenu">
            <li className="nav-item nav-link">
              <NavLink to="/auth" className="button3 signup">
                Check In
              </NavLink>
            </li>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
