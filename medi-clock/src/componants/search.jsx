import React, { useState } from "react";
import "./css/Search.css";
import DoctorCard from "./DoctorCard";
import SearchMedicineCard from "./SearchMedicineCard";
import NavigationBar from "./NavigationBar";

const Search = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  return (
    <div className="searchPage">

      {/* HEADER */}
      <h2 className="search-title">FIND</h2>

      {/* TOGGLE BUTTONS */}
      <div className="search-tabs">
        <button
          className={`tab-btn ${activeTab === "doctors" ? "active" : ""}`}
          onClick={() => setActiveTab("doctors")}
        >
          Doctors
        </button>

        <button
          className={`tab-btn ${activeTab === "medicine" ? "active" : ""}`}
          onClick={() => setActiveTab("medicine")}
        >
          Medicine
        </button>
      </div>

      {/* CONTENT */}
      <div className="search-list">
        {activeTab === "doctors" && (
          <>
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
          </>
        )}

        {activeTab === "medicine" && (
          <>
            <SearchMedicineCard />
            <SearchMedicineCard />
            <SearchMedicineCard />
            <SearchMedicineCard />
            <SearchMedicineCard />
            <SearchMedicineCard />            
            
          </>
        )}
      </div>

      <NavigationBar />
    </div>
  );
};

export default Search;
