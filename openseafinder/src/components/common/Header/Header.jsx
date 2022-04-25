import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="menuWrapper">
                <div className="menuItem">
                    <span>Search Wallet</span>
                </div>
                <div className="menuItem">
                    <span>Price Finder</span>
                </div>
                <div className="menuItem">
                    <span>Docs</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
