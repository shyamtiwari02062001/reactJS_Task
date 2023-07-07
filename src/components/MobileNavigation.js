import { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import Bars from "../assets/bars.png";
import Close from "../assets/close.png";
import "./mobileNavigation.css";
function MobileNavigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="mobileNavigation">
      <button className="drawerToggle" onClick={handleDrawerToggle}>
        {isDrawerOpen ? (
          <img src={Close} alt="close" height={"30px"} width={"30px"} />
        ) : (
          <img src={Bars} alt="bars" height={"40px"} width={"40px"} />
        )}
      </button>
      {isDrawerOpen && (
        <div className="drawer">
          <Link to="/">Task1</Link>
          <Link to="/task">Task2</Link>
        </div>
      )}
    </div>
  );
}
export default MobileNavigation;
