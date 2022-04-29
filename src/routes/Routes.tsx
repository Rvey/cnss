import React from "react";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import LoginPatient from "./../pages/LoginPatient";
import LoginAgent from "./../pages/LoginAgent";
import Home from "../pages/Home";
import ManagePatient from "../pages/ManagePatient";
import FileHistoryTable from "../components/Tabels/FileHistoryTable";
import FileHistory from "../pages/FileHistory";

export default function ERoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/LoginPatient" element={<LoginPatient />} />
        <Route path="/LoginAgent" element={<LoginAgent />} />
        <Route path="/ManagePatient" element={<ManagePatient />} />
        <Route path="/History" element={<FileHistory />} />
      </Routes>
    </BrowserRouter>
  );
}
