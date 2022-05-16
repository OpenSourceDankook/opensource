import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Header.css";

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

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };
  /*
  const Example = () => (
    <div className="header" style="font-size:2rem; color:white;">
      <Desktop>Desktop or laptop</Desktop>
      <Tablet>Tablet</Tablet>
      <Mobile>Mobile</Mobile>
      <Default>Not mobile (desktop or laptop or tablet)</Default>
    </div>
  );

  */
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
      <Tablet>
        <div className="header">
          <div className="menuWrapper">
            <div className="menuItem" onClick={detailSWClick}>
              <span>Search Wallet</span>
            </div>
          </div>
        </div>
      </Tablet>
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
