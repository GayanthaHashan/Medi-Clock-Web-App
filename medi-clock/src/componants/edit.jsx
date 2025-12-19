import React from 'react'
import './css/edit.css'
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import FindMedicineCard from "./FindMedicineCard";
import backButton from "./assets/back-button.svg";

const Edit = () => {
  const navigate = useNavigate();

  return (
    <div className="editPage">
      <div className="edit-header">
        <button className="Eback-button" onClick={() => navigate("/home")}>
         <img src={backButton} alt="Eback" />
                 
        </button>

        <p className="E1">EDIT</p>
        <p className="E2">REMINDER</p>
      </div>

      <div className="edit-cards">
        <FindMedicineCard />
        <FindMedicineCard />
        <FindMedicineCard />
        <FindMedicineCard />
        <FindMedicineCard />
        
        
      </div>

      

      <NavigationBar />
    </div>
  )
}

export default Edit
