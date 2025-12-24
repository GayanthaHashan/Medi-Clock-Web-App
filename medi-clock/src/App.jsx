import { Routes, Route } from "react-router-dom";

import Login from "./componants/Login";
import Signup from "./componants/Signup";
import Signup2 from "./componants/Signup2";
import Signup3 from "./componants/Signup3";
import Signupdone from "./componants/Signupdone";
import Login2 from "./componants/Login2";

import Home from "./componants/home";
import Profile from "./componants/profile";
import Search from "./componants/search";
import Edit from "./componants/edit";
import Feedback from "./componants/feedback";

import AddMedicinee from "./componants/AddMedicinee";
import DistantPatient from "./componants/DistantPatient";
import Calandar from "./componants/Calandar";
import AddMedicine2 from "./componants/AddMedicine2";
import EditMedicine from "./componants/EditMedicine";
import EditReminderDone from "./componants/EditReminderDone";
import SubmitSuccess from "./componants/SubmitSuccess";

const App = () => {
  return (
    <Routes>
     <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup2" element={<Signup2 />} />
      <Route path="/signup3" element={<Signup3 />} />
      <Route path="/signupdone" element={<Signupdone />} />
      <Route path="/login2" element={<Login2 />} />

      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/search" element={<Search />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/feedback" element={<Feedback />} />

      <Route path="/AddMedicinee" element={<AddMedicinee />} />
      <Route path="/DistantPatient" element={<DistantPatient />} />
      <Route path="/Calandar" element={<Calandar />} />
      <Route path="/AddMedicine2" element={<AddMedicine2 />} />

      <Route path="/edit-medicine" element={<EditMedicine />} />
      <Route path="/edit-reminder-done" element={<EditReminderDone />} />
      <Route path="/SubmitSuccess" element={<SubmitSuccess />} />
    </Routes>
  );
};

export default App;
