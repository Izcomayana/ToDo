import profile from "./assets/images/profile.png"
import settings from "./assets/images/settings.png"
import notification from "./assets/images/bell.png"

export default function navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg container">
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={settings} alt="Settings" /> <span className="navs">Settings</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src={notification} alt="notifications" /> <span className="navs">Notifications</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <img src={profile} alt="Profile" /> <span className="navs">John Doe</span>
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
