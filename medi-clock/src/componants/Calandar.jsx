import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Calandar.css";
import CalbackButton from "./assets/back-button.svg";

const Calandar = () => {
  const navigate = useNavigate();

  const [selectedDates, setSelectedDates] = useState([]);
  const [multiSelect, setMultiSelect] = useState(false);

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleDateClick = (day) => {
    if (multiSelect) {
      setSelectedDates((prev) =>
        prev.includes(day)
          ? prev.filter((d) => d !== day)
          : [...prev, day]
      );
    } else {
      setSelectedDates([day]);
    }
  };

  return (
    <div className="calendar-page">
      <div className="calendar-card">
        <button className="calander-back-button" onClick={() => navigate(-1)}>
         <img src={CalbackButton} alt="calander-back" />
                 
        </button>



        <p className="calendar-title">SELECT</p>
        <h3 className="calendar-subtitle">DATE</h3>

        {/* MULTI DATE CHECKBOX */}
        <div className="multi-date-check">
          <input
            type="checkbox"
            checked={multiSelect}
            onChange={() => {
              setMultiSelect(!multiSelect);
              setSelectedDates([]);
            }}
          />
          <span>Multiple date selection</span>
        </div>

        <div className="calendar-box">
          <div className="calendar-header">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="calendar-grid">
            {days.map((day) => (
              <div
                key={day}
                className={`calendar-day ${
                  selectedDates.includes(day) ? "active" : ""
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* SAVE BUTTON (DISABLED UNTIL DATE SELECTED) */}
        <button
          className="Csave-btn"
          disabled={selectedDates.length === 0}
          onClick={() => navigate(-1)}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default Calandar;
