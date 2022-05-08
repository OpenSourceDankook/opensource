import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "./Header.css";

function Header() {
    function docsClick(e) {
        window.location.replace("/#docs");
    }
    return (
        <div className="header">
            <div className="menuWrapper">
                <a href="/detail_SW">
                    <div className="menuItem">
                        <span>Search Wallet</span>
                    </div>
                </a>
                <a href="/detail">
                    <div className="menuItem">
                        <span>Price Finder </span>
                    </div>
                </a>
                <div className="menuItem" onClick={docsClick}>
                    <span>Docs</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
