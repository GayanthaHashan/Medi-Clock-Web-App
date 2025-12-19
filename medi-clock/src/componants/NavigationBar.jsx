import { NavLink } from "react-router-dom";
import "./css/NavigationBar.css";
import editIcon from "./assets/Icons/edit-icon.svg"
import profileIcon from "./assets/Icons/profile-icon.svg"
import findIcon from "./assets/Icons/find-icon.svg"
import homeIcon from "./assets/Icons/home-icon.svg"
import feedbackIcon from "./assets/Icons/feedback-icon.svg"

const NavigationBar = () => {
  return (
    <div className="nav-wrapper">
      <nav className="bottom-nav">

        <NavLink to="/profile" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <img src={profileIcon} alt="Feedback" className="nav-icon" />
        </NavLink>

        <NavLink to="/search" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
           <img src={findIcon} alt="Feedback" className="nav-icon" />
        </NavLink>

        <NavLink to="/home" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <img src={homeIcon} alt="Feedback" className="nav-icon" />
        </NavLink>

        <NavLink to="/edit" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <img src={editIcon} alt="Feedback" className="nav-icon" />
        </NavLink>

        <NavLink to="/feedback" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <img src={feedbackIcon} alt="Feedback" className="nav-icon" />
        </NavLink>

      </nav>
    </div>
  );
};

export default NavigationBar;
