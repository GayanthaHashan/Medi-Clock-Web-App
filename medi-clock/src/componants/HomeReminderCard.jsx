import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/HomeReminderCard.css';

const HomeReminderCard = ({ id }) => {
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();

  const toggleId = `toggle-${id}`; // 🔥 unique ID

  return (
    <div className="Card-container">
      <div className={`Hcard ${isActive ? "aactive" : "iinactive"}`}>

        <h3>Paracetamol</h3>

        <p className="Htime">
          Today <br />
          <span>9.00 p.m.</span>
        </p>

        <p className="desc">Two Pills after meal</p>

        {/* SWITCH */}
        <div className="Hswitch">
          <input
            type="checkbox"
            id={toggleId}
            checked={!isActive}
            onChange={() => setIsActive(prev => !prev)}
          />
          <label htmlFor={toggleId} className="Hslider">
            <span className="Hon-text">ON</span>
            <span className="Hoff-text">OFF</span>
          </label>
        </div>

        {/* EDIT BUTTON */}
        <button
          className="b1"
          disabled={!isActive}
          onClick={() => navigate("/edit")}
        >
          EDIT
        </button>

      </div>
    </div>
  );
};

export default HomeReminderCard;
