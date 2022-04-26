import React from "react";
import "./UserDocs.css";

function UserDocs() {
    const walletInfo = "WALLET INFO\n\n\n주 해킹 요소인 가상 지갑을 이용하는 대신 가상 지갑 주소를 사용";
    const nftInfo = "NFT INFO\n\n\n블록기술을 이용해서 디지털 자산의 소유주를 증명하는 가상의 토큰 대상이 되는 그림, 영상 등의 디지털 파일을 가리키는 주소를 토큰안에 담음으로써 일종의 가상 진품 증명서"
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
                    <div>
                        {walletInfo}
                    </div>
                </div>
                <div className="logoWrapper"> LOGO </div>
                <div className="cardItem">
                    <div>
                        {nftInfo}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDocs;
