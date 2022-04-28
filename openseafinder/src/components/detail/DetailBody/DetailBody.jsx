import React from "react";
import "./DetailBody.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DetailBody() {
  return (
    <div className="DetailBody">
      <div className="search">
        <div class="form__group field">
          <input type="input" class="form__field" placeholder="search" name="search" id='search' required />
          <label for="search" class="form__label">Search</label>
          <FontAwesomeIcon icon={faSearch} size="2x"/>
        </div>
        <div className="explain">
          <div className="explainText">
            <span>확인하려고 하는 프로젝트를 입력하세요.</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default DetailBody;
