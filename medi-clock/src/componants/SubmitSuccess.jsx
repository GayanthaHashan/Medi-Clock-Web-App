import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/SubmitSuccess.css";

import SubmitSuccessSVG from "./assets/feed-submited.svg";

const SubmitSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="submit-page">
      <div className="submit-card">

        {/* SUCCESS IMAGE */}
        <img
          src={SubmitSuccessSVG}
          alt="Submit Success"
          className="submit-image"
        />

        {/* TEXT */}
        <h2 className="submit-title">SUBMISSION</h2>
        <p className="submit-subtitle">SUCCESSFUL</p>

        {/* BUTTON */}
        <button
          className="submit-btn"
          onClick={() => navigate("/home")}
        >
          BACK TO HOME
        </button>

      </div>
    </div>
  );
};

export default SubmitSuccess;
