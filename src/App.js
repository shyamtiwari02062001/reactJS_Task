import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import Task1 from "./screens/Task1";
import Task2 from "./screens/Task2";
import MobileNavigation from "./components/task1/MobileNavigation";
import DesktopNavigation from "./components/task1/DesktopNavigation";
import "./App.css";
import ListData from "./store/ListReducer";
const rootReducer = combineReducers({
  listData: ListData,
});
function App() {
  const store = createStore(rootReducer);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <div className="logo-container">
              <Link to="/">
                <span>React JS</span>
              </Link>
            </div>
            {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
          </nav>
          <Routes>
            <Route exact path="/" element={<Task1 />} />
            <Route path="/task" element={<Task2 />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
