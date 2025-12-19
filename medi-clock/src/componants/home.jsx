import React from 'react'
import { useNavigate } from "react-router-dom";
import './css/Home.css'
import HomeReminderCard from "./HomeReminderCard";
import Homeimage from "./assets/home-image.svg"
import SetTimeCard from "./SetTimeCard";
import NavigationBar from "./NavigationBar";
import FindMedicineCard from "./FindMedicineCard";
import DoctorCard from "./DoctorCard";
import DoseCard from "./DoseCard";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="Home">
      
      <div className="welcome">
        <img src={Homeimage} alt="Homeimage" className='Homeimage' />
        <p className='W1'>HELLO</p>
        <p className='W2'>Mr. WIJETHUNGA</p>
        <p className='W3'>HOW ARE YOU<br></br> FEELING TODAY</p>
      </div>
      <p className="Recent-text">Rcent</p>
      <div className="resent-part">
        
      <HomeReminderCard id={1} />
      <HomeReminderCard id={2} />
      <HomeReminderCard id={3} />

      </div>
      <button
  className="add-medicine-btn"
  onClick={() => navigate("/AddMedicinee")}
>
  ADD MEDICINE
</button>
      
       
        <NavigationBar />
    </div>
    
  )
};

export default Home;
