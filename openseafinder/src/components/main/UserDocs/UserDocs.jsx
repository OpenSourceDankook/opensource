import React from "react";
import "./UserDocs.css";

function UserDocs() {
    return (
        <div className="userDocs">
            <div className="userDocsHeader">
                <div className="userDocsTitle">
                    <span>USER DOCS</span>
                </div>
                <div className="userDocsDesc">
                    <span>NFT finder 는 사용자 가이드를 제공하고있습니다.</span>
                </div>
            </div>
            <div className="userDocsBody">
                <div className="cardItem">
                    <span>WALLET INFO</span>
                </div>
                <div className="logoWrapper"> LOGO </div>
                <div className="cardItem">
                    <span>NFT INFO</span>
                </div>
            </div>
        </div>
    );
}

export default UserDocs;
