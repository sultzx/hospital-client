import React from "react";
import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import * as fetches from './redux/slices/user.js'
import { Main, RegisterSwitch, AdminRegister, DoctorRegister, PatientRegister, Login, Profile, Attachment, AllAttachments, CallHome, Doctors, Appointment, Laboratory } from './pages/index.js'

import { Header } from "./components/index.js";


function App() {

  const dispatch = useDispatch()

  React.useEffect( ()  => {
     dispatch(fetches.fetchAuthMe())
  }, [dispatch])

  const { data } = useSelector(state => state.user)
  
  return (
  <Routes>
    <Route path="/" element={<><Header/> <Main/></>  } />

    <Route path="switch-to-registration" element={<><Header/><RegisterSwitch/></>  } />
    <Route path="login" element={<><Header/><Login/></>  } />
    <Route path="admin/registration" element={<><Header/><AdminRegister/></>  } />
    <Route path="doctor/registration" element={<><Header/><DoctorRegister/></>  } />
    <Route path="patient/registration" element={<><Header/><PatientRegister/></>  } />
    <Route path="profile" element={<><Header/><Profile/></>  } />
    <Route path="attachment" element={<><Header/><Attachment/></>  } />
    <Route path="all-attachments" element={<><Header/><AllAttachments/></>  } />
    <Route path="call-home" element={<><Header/><CallHome/></>  } />
    <Route path="doctors" element={<><Header/><Doctors/></>  } />
    <Route path="appointment" element={<><Header/><Appointment/></>  } />
    <Route path="laboratory" element={<><Header/><Laboratory/></>  } />
    {/* <Route path="/login" element={<><Header/><Signin/></>  } />
    <Route path="/profile" element={<><Header/><Profile/></>  } /> */}
    {/* {
      data?.isAdmin == true && <Route path="/admin" element={<><Header/><Admin/></>  } />
    } */}
  </Routes>
  );
}

export default App;