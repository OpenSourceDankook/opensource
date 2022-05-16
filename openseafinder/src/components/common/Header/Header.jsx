import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import { Desktop, Mobile } from "../MediaQuery.jsx";

function Header() {
  function detailClick(e) {
    window.location.href = "/detail";
  }
  function detailSWClick(e) {
    window.location.href = "/detail_SW";
  }
  function docsClick(e) {
    window.location.replace("/");
    document.body.scrollTop = document.body.scrollHeight;
  }

  return (
    <>
      <Desktop>
        <div className="header">
          <div className="menuWrapper">
            <div className="menuItem" onClick={detailSWClick}>
              <span>Search Wallet</span>
            </div>
            <div className="menuItem" onClick={detailClick}>
              <span>Price Finder </span>
            </div>
            <div className="menuItem" onClick={docsClick}>
              <span>Docs</span>
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="header">
          <div className="menuWrapper">
            <div className="menuItem" onClick={detailSWClick}>
              <span>Search Wallet</span>
            </div>
            <div className="menuItem" onClick={detailClick}>
              <span>Price Finder </span>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
}

export default Header;
