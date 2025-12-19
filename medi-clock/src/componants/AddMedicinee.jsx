import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/AddMedicinee.css";

import backButton from "./assets/back-button.svg";
import DoseCard from "./DoseCard";
import SetTimeCard from "./SetTimeCard";

const AddMedicinee = () => {
  const navigate = useNavigate();

  // 🔹 NEW STATES (ONLY ADDITION)
  const [mealType, setMealType] = useState("before"); // before | after
  const [dateType, setDateType] = useState("today");  // today | set

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
        />

        {/* 🔹 MEAL TOGGLE */}
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

        {/* 🔹 DATE TOGGLE */}
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
          <button className="setR" onClick={() => navigate("/AddMedicine2")}>
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
