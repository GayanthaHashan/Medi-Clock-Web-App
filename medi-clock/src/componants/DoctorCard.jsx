import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/DoctorCard.css";

const DoctorCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="doctor-card"
      onClick={() => navigate("/doctor-details")}
    >
      <div className="doctor-text">
        <h3>Dr Kumarsiri</h3>
        <p className="role">Surgeon</p>
        <p className="desc">
          MBBS(Colombo) MD-Medicine (Sri Lanka)<br />
          PGIM-Board Certified as Specialist in Dermatology<br />
          SLMC Reg: 6848
        </p>
      </div>

      <div className="doctor-icon">
        <span className="user-icon">👤</span>
      </div>
    </div>
  );
};

export default DoctorCard;
