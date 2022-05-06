import React, { useState } from "react";
import "./DetailBody.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DetailBody_SW() {
    function searchWalletClick(e) {
        const search = document.getElementById("search").value;
        document.getElementById("result").innerText = search;
        //window.location.href = "/main";
        //일단 main 페이지로 해놓음. => 아래에 카드가 뜨게끔 해야 함.
    }
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="DetailBody">
            <div className="search">
                <div className="explain">
                    <div className="explainText">
                        <span>확인하려고 하는 NFT 지갑 주소를 입력하세요.</span>
                    </div>
                </div>
                <div className="form__group field">
                    <input
                        type="input"
                        className="form__field"
                        placeholder="search"
                        name="search"
                        id="search"
                        required
                    />
                    <label for="search" className="form__label">
                        Search
                    </label>
                    <div onClick={searchWalletClick}>
                        <FontAwesomeIcon icon={faSearch} size="2x" />
                    </div>
                </div>
                <div id="result"></div>
            </div>
        </div>
    );
}

export default DetailBody_SW;
