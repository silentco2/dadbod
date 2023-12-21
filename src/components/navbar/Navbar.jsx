import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const width = window.innerWidth;
  return width;
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {setWindowDimensions(getWindowDimensions());}
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}

function Navbar({isCollapsed}) {
  const width = useWindowDimensions();
  return (
    <nav className={width <= 800 || isCollapsed === true ? "p-4 navbar-collapse collapse" : "p-4 navbar-collapse show"} id="hamburger-menu">
      <ul className="ps-0">
        <li className="mb-1">
          <Link to={'/'} className="route-link">
            <button className="btn btn-toggle rounded nav-button">
              <i className="fa-solid fa-location-dot nav-icon" style={{ color: "#269A84" }}></i>
              Member Location
            </button>
          </Link>
        </li>
        <li className="mb-1">
          <button className="btn btn-toggle rounded collapsed nav-button" data-bs-toggle="collapse" data-bs-target="#calculators-collapse" aria-expanded="false">
            <div className="dropdown-title">
              <i className="fa-solid fa-calculator nav-icon" style={{ color: "#269A84" }}></i>
              Calculators
            </div>
            <i className="fa-solid fa-chevron-right" style={{ marginLeft: "2rem", transition: "all .3s" }}></i>
          </button>
          <div className="collapse dropdown-items" id="calculators-collapse">
            <ul className="btn-toggle-nav p-0 fw-normal pb-1 small">
              <li className="mb-1">
                <Link className="route-link" to={'/carb-cycling'}>
                  <button className="btn rounded nav-button">
                    <i className="fa-solid fa-burger nav-icon"></i>Carb Cycling
                  </button>
                </Link>
              </li>
              <li className="mb-1">
                <Link className="route-link" to={'/keto-cycling'}>
                  <button className="btn rounded nav-button">
                    <i className="fa-solid fa-fire nav-icon"></i>Keto Cycling
                  </button>
                </Link>
              </li>
              <li className="mb-1">
                <Link className="route-link" to={'/standard'}>
                  <button className="btn rounded nav-button">
                    <i className="fa-solid fa-drumstick-bite nav-icon"></i>Standard
                  </button>
                </Link>
              </li>
              <li className="mb-1">
                <Link className="route-link" to={'/nutrition-data'}>
                  <button className="btn rounded nav-button">
                    <i className="fa-solid fa-bowl-food nav-icon"></i>Nuetrition Data
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
