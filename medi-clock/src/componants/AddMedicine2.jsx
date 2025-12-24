import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/AddMedicine2.css";

import ReminderSuccessSVG from "./assets/SET-MEDICATION.svg"; 


const AddMedicine2 = () => {
  const navigate = useNavigate();

  return (
    <div className="reminder2-page">
      <div className="reminder2-card">

        <img
          src={ReminderSuccessSVG}
          alt="Reminder Completed"
          className="reminder2-image"
        />

        <h2 className="reminder2-title">REMINDER</h2>
        <p className="reminder2-subtitle">SETTING COMPLETED</p>

        <button
          className="reminder2-btn"
          onClick={() => navigate("/home")}
        >
          BACK TO HOME
        </button>

      </div>
    </div>
  );
};

export default AddMedicine2;
