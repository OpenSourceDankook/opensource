import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import { Mobile, PC } from "../mediaQuery.tsx"

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
    <div className="header">
      <div className="menuWrapper">
        <PC>
          <div className="menuItem" onClick={detailSWClick}>
            <span>Search Wallet</span>
          </div>
          <div className="menuItem" onClick={detailClick}>
            <span>Price Finder </span>
          </div>
          <div className="menuItem" onClick={docsClick}>
            <span>Docs</span>
          </div>
        </PC>
        <Mobile>
          모바일
        </Mobile>
      </div>
    </div>
  );
}

export default Header;
