import profile from "../assets/images/profile.png";
import settings from "../assets/images/settings.png";
import notification from "../assets/images/bell.png";
import close from "../assets/images/x-close.png";
import { useState } from "react";

export default function navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1 className="head fw-bold m-0">ToDo</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {toggle ? (
              <span
                onClick={() => setToggle(false)}
                className="navbar-toggler-icon"
              ></span>
            ) : (
              <span onClick={() => setToggle(true)}>
                <img src={close} alt="" />
              </span>
            )}
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={settings} alt="Settings" />{" "}
                  <span className="navs">Settings</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={notification} alt="notifications" />{" "}
                  <span className="navs">Notifications</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <img src={profile} alt="Profile" />{" "}
                  <span className="navs">John Doe</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
