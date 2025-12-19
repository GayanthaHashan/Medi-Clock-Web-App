import React from "react";
import "./css/SearchMedicineCard.css";

const SearchMedicineCard = () => {
  return (
    <div className="search-medicine-card"
    onClick={() => navigate("/medicine-details")}>
      <h3 className="medicine-name">Paracetamol</h3>

      <p className="medicine-role">Surgeon</p>

      <p className="medicine-desc">
        MBBS(Colombo) MD-Medicine (Sri Lanka) <br />
        PGIM-Board Certified as Specialist in Dermatology <br />
        SLMC Reg: 6848 </p>
    </div>
  );
};

export default SearchMedicineCard;
