import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/FindMedicineCard.css";

const FindMedicineCard = ({id}) => {
  const storageKey = `find-medicine-card-${id}`;

const [isOn, setIsOn] = useState(() => {
  const saved = localStorage.getItem(storageKey);
  return saved !== null ? JSON.parse(saved) : true;
});

  useEffect(() => {
  localStorage.setItem(storageKey, JSON.stringify(isOn));
}, [isOn, storageKey]);


  const navigate = useNavigate();

  return (
    <div className={`medicine-cardd ${isOn ? "active" : "inactive"}`}>

      <div className="card-textt">
        <h3>Paracetamol</h3>
        <p className="timee">
          Today at <span>9.00 p.m.</span>
        </p>
        <p className="desc">Two Pills after meal</p>
      </div>

      <div className="card-actionss">

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
