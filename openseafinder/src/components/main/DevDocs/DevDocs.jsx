import React from "react";
import "./DevDocs.css";

function DevDocs() {
    return (
        <div className="devDocs">
            <div className="devDocsHeader">
                <div className="devDocsTitle">
                    <span>DEV DOCS</span>
                </div>
                <div className="devDocsDesc">
                    <span>
                        NFT finder 는 OPENSEA의 OPEN API로 제작되었으며, NFT
                        finder에 기여할 수 있습니다
                    </span>
                </div>
            </div>
            <div className="devDocsBody">GITHUB</div>
        </div>
    );
}

export default DevDocs;
