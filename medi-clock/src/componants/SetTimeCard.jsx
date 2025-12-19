import React from "react";
import "./css/SetTimeCard.css";

const SetTimeCard = () => {
  return (
    <div className="time-card-container">
      <div className="time-card">
        <div className="time-text">09:00</div>
        <div className="ampm-text">AM</div>
        <button className="set-edit-btn">EDIT</button>
      </div>
    </div>
  );
};

export default SetTimeCard;
