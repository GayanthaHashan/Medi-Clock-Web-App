import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./css/feedback.css";
import NavigationBar from "./NavigationBar";
import fbackButton from "./assets/back-button.svg";

const Feedback = () => {
  const [rating, setRating] = useState(5);
  const navigate = useNavigate(); 

  return (
    <div className="feedback-page">
      <div className="feeback-align">

        <button
          className="fback-button"
          onClick={() => navigate("/home")}
        >
          <img src={fbackButton} alt="fback" />
        </button>

        
        <div className="feedback-head-text">
          <h1 className="feedback-title">HELP &</h1>
          <h2 className="feedback-subtitle">CUSTOMER FEEDBACK</h2>
        </div>

        
        <p className="section-title">HELP</p>
        <div className="customer-care-buttons">
          <button className="primary-btn">CUSTOMER CARE</button>
          <button className="secondary-btn">USER GUIDE</button>
        </div>

        <p className="section-title">CUSTOMER FEEDBACK</p>
        <p className="label">RATE</p>

        <div className="question-block">
          <p>How was your Experience while using the application?</p>
          <input type="text" placeholder="Reply Here" />
        </div>

        <div className="question-block">
          <p>Is this application do the job correctly?</p>
          <input type="text" placeholder="Reply Here" />
        </div>

        <div className="question-block">
          <p>How Accurate is this application?</p>
          <input type="text" placeholder="Reply Here" />
        </div>

        <div className="question-block">
          <p>Why did you choose us?</p>
          <input type="text" placeholder="Reply Here" />
        </div>

        <div className="question-block">
          <p>How did you Find Us?</p>
          <input type="text" placeholder="Reply Here" />
        </div>

        <p className="label">RARING</p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? "star active" : "star"}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        <button
          className="fsubmit-btn"
          onClick={() => navigate("/SubmitSuccess")}
        >
          SUBMIT
        </button>

      </div>
      <NavigationBar />
    </div>
  );
};

export default Feedback;
