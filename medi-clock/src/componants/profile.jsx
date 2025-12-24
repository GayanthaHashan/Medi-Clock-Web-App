import React from "react";
import "./css/Profile.css";
import HomeReminderCard from "./HomeReminderCard";
import FindMedicineCard from "./FindMedicineCard";
import NavigationBar from "./NavigationBar";

import profileImg from "./assets/Icons/male-profile.svg";
import editIcon from "./assets/Icons/profile-edit-icon.svg";


const profile = () => {
  return (
    <div className="Profile">

      <div className="profile-header">
        <img src={profileImg} alt="Profile" className="profile-avatar" />
        <div className="head-text">
        <div className="profile-info">
          <h2>Mr.WIJETHUNGA.</h2>
          <p className="Email">WIJETHUNGA@GMAIL.COM</p>
          
        </div>

        <button className="profile-edit-btn">
          <img src={editIcon} alt="Edit profile" />
        </button>
        </div>
      </div>

      <div className="profile-section">
        <h4 className="section-title">Recent Settled</h4>

        <div className="Hprofile-cards">
          <HomeReminderCard id={1} />
          <HomeReminderCard id={2} />
          <HomeReminderCard id={3} />
        </div>
      </div>

      <div className="profile-section">
        <h4 className="section-title">Current Running</h4>

        <div className="Fprofile-cards">
          <FindMedicineCard id={1} editable />
          <FindMedicineCard id={3} editable />
          
          
        </div>
      </div>

      <NavigationBar />
    </div>
  );
};

export default profile;
