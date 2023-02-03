import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import SignUpPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import DashboardPage from "./pages/DashboardPage/DashboardPage";

import userService from "./utils/userService";

function App() {

  const [user, setUser] = useState(userService.getUser());

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  // function handleLogout(){
  //   userService.logout();
  //   setUser(null);
  // }

  if (user) {

   return (
    <Routes>
      {/* make sure to include the loggeduser below! */}
      <Route path="/" element={<DashboardPage />} /> 
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/signup" element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
    </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/signup" element={<SignUpPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  )
 
}

export default App;
