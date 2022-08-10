import "../Header/Header.css";
import logo from "../../assets/twitter-logo.svg";
import home from "../../assets/home.svg";
import explore from "../../assets/explore.svg";
import notification from "../../assets/notification.svg";
import messages from "../../assets/messages.svg";
import bookmarks from "../../assets/bookmarks.svg";
import lists from "../../assets/lists.svg";
import profile from "../../assets/profile.svg";
import more from "../../assets/more.svg";
import bobur from "../../assets/bobur.png";
import vector from "../../assets/Vector.svg";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>
        <div className="">
          <div className="wrapper">
            <div className="button">
              <div className="icon">
                <NavLink to="/">
                  <img
                    className="logo"
                    src={logo}
                    alt=""
                    width={40}
                    height={40}
                  />
                </NavLink>
                <span>Twitter</span>
              </div>
            </div>
          </div>

          <ul className="list-unstyled list">
            <NavLink
              to="/list"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none nav-link-2 link_active"
                  : "text-decoration-none nav-link-2"
              }
            >
              <li className="d-flex align-items-center gap-2 nav-link">
                <img src={home} alt="" />
                Home
              </li>
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none nav-link-2 link_active"
                  : "text-decoration-none nav-link-2"
              }
            >
              <li className="d-flex align-items-center gap-2 nav-link">
                <img src={explore} alt="" />
                Explore
              </li>
            </NavLink>
            <NavLink
              to="/notification"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none nav-link-2 link_active"
                  : "text-decoration-none nav-link-2"
              }
            >
              <li className="d-flex align-items-center gap-2 nav-link">
                <img src={notification} alt="" />
                Notification
              </li>
            </NavLink>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none nav-link-2 link_active"
                  : "text-decoration-none nav-link-2"
              }
            >
              <li className="d-flex align-items-center gap-2 nav-link">
                <img src={messages} alt="" />
                Messages
              </li>
            </NavLink>
            <li className="d-flex align-items-center gap-2 nav-link">
              <img src={bookmarks} alt="" />
              <a className="text-decoration-none nav-link-2" href="">
                Bookmarks
              </a>
            </li>
            <li className="d-flex align-items-center gap-2 nav-link">
              <img src={lists} alt="" />
              <a className="text-decoration-none nav-link-2" href="">
                Lists
              </a>
            </li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none nav-link-2 link_active"
                  : "text-decoration-none nav-link-2"
              }
            >
              <li className="d-flex align-items-center gap-2 nav-link">
                <img src={profile} alt="" />
                Profile
              </li>
            </NavLink>
            <li className="d-flex align-items-center gap-2 nav-link">
              <img src={more} alt="" />
              <a className="text-decoration-none nav-link-2" href="">
                More
              </a>
            </li>

            <button class="navbar__link-btn btn-1">Tweet</button>
          </ul>

          <div className="d-flex align-items-center gap-3 www position-absolute bottom-0 mb-4">
            <img className="wew" src={bobur} alt="" />
            <div>
              <p className="name-nav">Bobur</p>
              <a
                className="nav-link-3"
                href="https://t.me/boburjon_mavlonov"
                target={"_blank"}
              >
                @Mavlonov
              </a>
            </div>
            <button className="border-0 bg-transparent">
              <img src={vector} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
