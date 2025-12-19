import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/FindMedicineCard.css";

const FindMedicineCard = () => {
  const [isOn, setIsOn] = useState(true);
  const navigate = useNavigate();

  return (
    <div className={`medicine-cardd ${isOn ? "active" : "inactive"}`}>

      {/* LEFT CONTENT */}
      <div className="card-textt">
        <h3>Paracetamol</h3>
        <p className="timee">
          Today at <span>9.00 p.m.</span>
        </p>
        <p className="desc">Two Pills after meal</p>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="card-actionss">

        {/* TOGGLE */}
        <label className="switchh">
          <input
            type="checkbox"
            checked={isOn}
            onChange={() => setIsOn(!isOn)}
          />
          <span className="sliderr">
            <span className="on">OFF</span>
            <span className="off">ON</span>
          </span>
        </label>

        {/* EDIT BUTTON */}
        <button
          className="edit-button"
          disabled={!isOn}
          onClick={() => isOn && navigate("/edit-medicine")}
        >
          ✎
        </button>

      </div>
    </div>
  );
};

export default FindMedicineCard;
