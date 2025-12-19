import React, { useState } from "react";
import "./css/DoseCard.css";

const DoseCard = () => {
  const [mode, setMode] = useState("CAPSULE");

  const placeholderMap = {
    CAPSULE: "Capsule Count",
    SYRUP: "ml",
    INJECTION: "Rounds",
    OTHER: "Dosage",
  };

  return (
    <div className="medicine-card">

      {/* BUTTONS */}
      <div className="mode-tabs">
        {["CAPSULE", "SYRUP", "INJECTION", "OTHER"].map((item) => (
          <button
            key={item}
            type="button"              
            className={`tab ${mode === item ? "active" : "CAPSULE"}`}
            onClick={() => setMode(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* INPUT */}
      <div className="input-wrapper">
        <input
          key={mode}                   // ✅ FORCE RERENDER
          type="text"
          className="medicine-input"
          placeholder={placeholderMap[mode]}
        />
      </div>

    </div>
  );
};

export default DoseCard;
