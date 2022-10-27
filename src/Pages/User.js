import React from "react";
import FindCities from "../components/FindCities";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SearchTab from "../components/Tabs";
import WelcomeNote from "../components/WelcomeNote";

export default function UserPanel() {
  return (
    <div className="container-fluid">
      <div className="firstDiv">
        <NavBar />
        <SearchTab />
      </div>
      <FindCities />
      <WelcomeNote />
      <Footer />
    </div>
  );
}
