import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./Header.css";

function Header() {
  function detailClick(e) {
    window.location.href = "/detail";
  }
  function detailSWClick(e) {
    window.location.href = "/detail_SW";
  }
  function docsClick(e) {
    window.location.href = "/main";
  }
  return (
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
  );
}

export default Header;
