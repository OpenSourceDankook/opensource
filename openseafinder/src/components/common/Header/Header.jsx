import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import { Desktop, Mobile } from "../MediaQuery.jsx";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

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
  
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () =>{
    setMenu(isOpen => !isOpen);
  }
  function buttonClick(e){
    window.location.href = "/detail"; //수정예정
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
            <div className="menuItem" onClick={docsClick}>
              <span>Docs</span>
            </div>
          </div>
          <div className ="button" > 
            <FontAwesomeIcon icon={ faBars }  />
            {/* <div className={isOpen ? "show-menu" : "hide-menu"}></div> */}
              
          </div>
        </div>
        
      </Mobile>
    </>
  );
}

export default Header;
