import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import useToken from "./useToken";
import Dashboard from "../Dashboard/Dashboard";
import Preferences from "../Preferences/Preferences";
import Login from "../Login/Login";

function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Application</h1>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/preferences" element={<Preferences />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
