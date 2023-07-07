import React from "react";
import { Link } from "react-router-dom";
import "./desktopNavigation.css";
function DesktopNavigation() {
  return (
    <div className="desktop-navigation">
      <ul>
        <li>
          <Link to="/">Task1</Link>
        </li>
        <li>
          <Link to="/task">Task2</Link>
        </li>
      </ul>
    </div>
  );
}
export default DesktopNavigation;
