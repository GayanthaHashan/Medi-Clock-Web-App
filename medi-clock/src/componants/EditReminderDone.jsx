import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/EditReminderDone.css";

import ReminderSuccessSVG from "./assets/edit-reminder-done.svg";

const EditReminderDone = () => {
  const navigate = useNavigate();

  return (
    <div className="edit-reminder-page">
      <div className="edit-reminder-card">

        {/* SUCCESS IMAGE */}
        <img
          src={ReminderSuccessSVG}
          alt="Reminder Updated"
          className="edit-reminder-image"
        />

        {/* TEXT */}
        <h2 className="edit-reminder-title">REMINDER</h2>
        <p className="edit-reminder-subtitle">UPDATED SUCCESSFULLY</p>

        {/* BUTTON */}
        <button
          className="edit-reminder-btn"
          onClick={() => navigate("/home")}
        >
          BACK TO HOME
        </button>

      </div>
    </div>
  );
};

export default EditReminderDone;
