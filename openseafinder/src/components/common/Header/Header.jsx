import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from "react";
import "./Header.css";

function Header() {
    function detailClick(e){
        window.location.href="/detail";
    }
    return (
        <div className="header">
            <div className="menuWrapper">
                <div className="menuItem" onClick={detailClick}>
                    <span>Search Wallet</span>
                </div>
                <div className="menuItem" onClick={detailClick}>
                    <span>Price Finder </span>
                </div>
                <div className="menuItem">
                    <span>Docs</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
