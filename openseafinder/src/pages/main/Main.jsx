import React from "react";
// import MainBody from "../../components/main/MainBody";
import Header from "../../components/common/Header/Header";
import Banner from "../../components/main/Banner/Banner";
import UserDocs from "../../components/main/UserDocs/UserDocs";
import DevDocs from "../../components/main/DevDocs/DevDocs";
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <Header />
      <Banner />
      <UserDocs />
      <DevDocs />
    </div>
  );
}

export default Main;
