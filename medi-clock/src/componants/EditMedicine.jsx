import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/EditMedicine.css";

import backButton from "./assets/back-button.svg";
import DoseCard from "./DoseCard";
import SetTimeCard from "./SetTimeCard";

const EditMedicine = () => {
  const navigate = useNavigate();


  const [mealType, setMealType] = useState("before"); 
  const [dateType, setDateType] = useState("today");

  return (
    <div className="edit-medicine-page">
      <div className="edit-medicine-card">
        <button className="edit-back-button" onClick={() => navigate("/edit")}>
          <img src={backButton} alt="back" />
        </button>

        <h1 className="edit-title">EDIT</h1>
        <h3 className="edit-subtitle">MEDICATION</h3>

        <label className="edit-tag">Medicine Name</label>
        <input className="edit-input" placeholder="Your Medicine Here" />

        <div className="edit-checkbox-row">
          <input type="checkbox" />
          <span>Multi medication</span>
        </div>

        <label className="edit-tag">Taking Rounds</label>
        <input className="edit-input" placeholder="How many rounds do you take this in a Day"
        />

        <div className="edit-meal-buttons">
          <button className={`edit-meal-btn ${ mealType === "before" ? "active" : ""}`}
            onClick={() => setMealType("before")}>
            BEFORE MEAL
          </button>

          <button
            className={`edit-meal-btn ${ mealType === "after" ? "active" : "" }`}
            onClick={() => setMealType("after")}>
            AFTER MEAL
          </button>
        </div>

        <label className="edit-tag">Dose</label>
        <DoseCard />

        <label className="edit-tag">Date</label>
        <div className="edit-date-buttons">
          <button className={`edit-date-btn ${ dateType === "today" ? "active" : "" }`}
            onClick={() => setDateType("today")}>
            TODAY
          </button>

          <button className={`edit-date-btn ${ dateType === "set" ? "active" : "" }`}
            onClick={() => { setDateType("set"); navigate("/Calandar"); }}>
            SET DATE
          </button>
        </div>

        <label className="edit-tag">Time</label>
        <div className="edit-time-scroll">
          <SetTimeCard />
          <SetTimeCard />
          <SetTimeCard />
        </div>

        <label className="edit-reminder-head">Reminder Type</label>
        <div className="edit-checkbox-col">
          <label><input type="checkbox" /> Call Notification</label>
          <label><input type="checkbox" /> Pop up Notification</label>
          <label><input type="checkbox" /> Alarm Notification</label>
        </div>

        <div className="edit-action-btn">
          <button className="edit-save" onClick={() => navigate("/edit-reminder-done")}>SAVE CHANGES</button>
          <button className="edit-cancel" onClick={() => navigate("/home")}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMedicine;
