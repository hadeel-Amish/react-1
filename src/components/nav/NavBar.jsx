import "./NavStyle.css";
import logo from "./../../assets/images/logo.png";
import paricon from "./../../assets/images/paricon.png";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
export default function NavBar({ menu, path }) {
  useEffect(() => {
    const navicon = document.getElementById("naviconclass");
    if (navicon) {
      navicon.addEventListener("click", function () {
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("naviconclass").style.display = "none";
        document.getElementById("logo").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("btn").style.display = "none";
      });
    } else {
      console.error("Element with id 'navicon' not found");
    }

    const exit = document.getElementById("ex");
    if (exit) {
      exit.addEventListener("click", function () {
        document.getElementById("sidebar").style.display = "none";
        document.getElementById("naviconclass").style.display = "block";
        document.getElementById("logo").style.display = "block";
      });
    } else {
      console.error("Element with id 'exit' not found");
    }
  }, []);

  return (
    <>
      <nav>
        <img src={logo} className="logo" id="logo" />
        <ul className="menu" id="menu">
          {menu.map((e, index) => {
            return (
              <li className="li">
                <NavLink key={index} to={e.path}>
                  {e.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button className="btn" id="btn">
          Get in Touch
        </button>
        <div className="sidebar" id="sidebar">
          <div className="icon">
            <i className="fa-solid fa-x" id="ex"></i>
          </div>
          <ul className="ulSide">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/Packages">Packages</NavLink>
            </li>
          </ul>

          <button className="btn-2">Get in Touch</button>
        </div>
        <img src={paricon} className="naviconclass" id="naviconclass" />
      </nav>
    </>
  );
}
