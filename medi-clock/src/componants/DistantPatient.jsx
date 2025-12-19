import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/DistantPatient.css";
import backButton from "./assets/back-button.svg";
const DistantPatient = () => {
  const navigate = useNavigate();

  return (
    <div className="distant-page">
      <div className="distant-card">

        {/* BACK BUTTON */}
        <button className="Dback-button" onClick={() => navigate(-1)}>
         <img src={backButton} alt="Dback" />
                 
        </button>

        <h2 className="title">DISTANT PATIENT</h2>
        <p className="subtitle">
          DON'T HAVE THE MOBILE <br />
          NEAR THE PATIENT
        </p>

        {/* DEVICE BUTTONS */}
        <div className="device-buttons">
          <button className="device-btn active">MOBILE PHONE</button>
          <button className="device-btn">OTHER DEVICE</button>
        </div>

        {/* REMINDER TYPE */}
        <label className="section-label">Reminder Type</label>
        <div className="checkbox-group">
          <label><input type="checkbox" /> Call Notification</label>
          <label><input type="checkbox" /> Pop up Notification</label>
          <label><input type="checkbox" /> Alarm Notification</label>
        </div>

        <div className="Dsave">
        <button
          className="Dsave-btn"
          onClick={() => navigate("/AddMedicinee")}
        >
          SAVE
        </button></div>

      </div>
    </div>
  );
};

export default DistantPatient;
