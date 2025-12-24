import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/AddMedicinee.css";

import backButton from "./assets/back-button.svg";
import DoseCard from "./DoseCard";
import SetTimeCard from "./SetTimeCard";

const AddMedicinee = () => {
  const navigate = useNavigate();

  const [rounds, setRounds] = useState(() => {
  const saved = localStorage.getItem("addmed-rounds");
  return saved ? saved : "";
});

  useEffect(() => {
  localStorage.setItem("addmed-rounds", rounds);
}, [rounds]);

  const handleSetReminder = () => {
  if (!rounds || Number(rounds) <= 0) {
    alert("Invalid Round Count");
    return;
  }

  navigate("/AddMedicine2");
};

  const [mealType, setMealType] = useState("before"); 
  const [dateType, setDateType] = useState("today"); 

  return (
    <div className="add-medicine-page1">
      <div className="add-medicine-card1">
        <button className="Aback-button" onClick={() => navigate("/home")}>
          <img src={backButton} alt="Aback" />
        </button>

        <h1 className="title">ADD</h1>
        <h3 className="subtitle">MEDICATION</h3>

        <label className="tag-size-edit">Medicine Name</label>
        <input className="text-input" placeholder="Your Medicine Here" />

        <div className="checkbox-row">
          <input type="checkbox" />
          <span>Multi medication</span>
        </div>

        <label className="tag-size-edit">Taking Rounds</label>
        <input
         className="text-input"
         placeholder="How many rounds do you take this in a Day"
         value={rounds}
         onChange={(e) => {
         const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      alert("Invalid Round Count");
      return;
    }

    setRounds(value);
  }}
/>
        <div className="meal-buttons">
          <button
            className={`meal-btn ${mealType === "before" ? "active" : ""}`}
            onClick={() => setMealType("before")}
          >
            BEFORE MEAL
          </button>

          <button
            className={`meal-btn ${mealType === "after" ? "active" : ""}`}
            onClick={() => setMealType("after")}
          >
            AFTER MEAL
          </button>
        </div>

        <label className="tag-size-edit">Dose</label>
        <DoseCard />

        <label className="tag-size-edit">Date</label>
        <div className="date-buttons">
          <button
            className={`date-btn ${dateType === "today" ? "active" : ""}`}
            onClick={() => setDateType("today")}
          >
            TODAY
          </button>

          <button
            className={`date-btn ${dateType === "set" ? "active" : ""}`}
            onClick={() => {
              setDateType("set");
              navigate("/Calandar");
            }}
          >
            SET DATE
          </button>
        </div>

        <label className="tag-size-edit">Time</label>
        <div className="time-scroll">
          <SetTimeCard />
          <SetTimeCard />
          <SetTimeCard />
        </div>

        <label className="reminder-type-head">Reminder Type</label>
        <div className="checkbox-col">
          <label><input type="checkbox" /> Call Notification</label>
          <label><input type="checkbox" /> Pop up Notification</label>
          <label><input type="checkbox" /> Alarm Notification</label>
        </div>

        <div className="add-action-btn">
          <button className="setR" onClick={handleSetReminder}>
            SET REMINDER
          </button>
          <button
            className="distant"
            onClick={() => navigate("/DistantPatient")}
          >
            DISTANT PATIENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMedicinee;
