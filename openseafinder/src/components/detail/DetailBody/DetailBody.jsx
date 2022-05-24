import React, { useState } from "react";
import axios from "axios";
import "./DetailBody.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner, Badge, Card } from "reactstrap";

function DetailBody() {
    const [projectInputValue, setProjectInputValue] = useState("");
    const [projectInfo, setProjectInfo] = useState();
    const [loading, setLoading] = useState(false);

    const fetchPriceInfo = () => {
        setLoading(true);
        if (projectInputValue) {
            axios
                .get(
                    `https://api.opensea.io/api/v1/collection/${projectInputValue}/stats`
                )
                .then((res) => {
                    setProjectInfo(res.data.stats);
                    setLoading(false);
                });
        } else {
            return false;
        }
    };
    return (
        <div className="DetailBody">
            <div className="search">
                <div className="explain">
                    <div className="explainText">
                        <span>프로젝트명을 입력하세요.</span>
                    </div>
                </div>
                <div className="form__group field">
                    <input
                        type="input"
                        className="form__field"
                        placeholder="search"
                        name="search"
                        id="search"
                        onChange={(e) =>
                            setProjectInputValue(e.currentTarget.value)
                        }
                        required
                    />
                    <label for="search" className="form__label">
                        Search
                    </label>

                    <FontAwesomeIcon
                        icon={faSearch}
                        size="2x"
                        onClick={fetchPriceInfo}
                    />
                </div>
            </div>
            {!projectInfo && (
            <div className="projectInfoBoxWrapper">
                <div className="projectBox">
                        <div className="projectBoxItem">
                            <Badge
                                size="lg"
                                className="badge"
                                pill
                                color="primary"
                            >
                                바닥가격
                            </Badge>
                            <span>
                                NFT 등급 중 가장 낮은 수준으로 올라와 있는 가격
                            </span>
                        </div>
                        <div className="projectBoxItem">
                            <Badge
                                size="lg"
                                className="badge"
                                pill
                                color="primary"
                            >
                                발행 NFT 수량
                            </Badge>
                            <span>
                                발행 가능한 NFT의 수량
                            </span>
                        </div>
                        <div className="projectBoxItem">
                            <Badge
                                size="lg"
                                className="badge"
                                pill
                                color="primary"
                            >
                                소유자 수
                            </Badge>
                            <span>
                                해당 NFT의 소유자의 수
                            </span>
                        </div>
                        <div className="projectBoxItem">
                            <Badge
                                size="lg"
                                className="badge"
                                pill
                                color="primary"
                            >
                                금일 평균 거래 가격
                            </Badge>
                            <span>
                                오늘 날짜의 해당 NFT의 평균 거래 가격
                            </span>
                        </div>
                        <div className="projectBoxItem">
                            <Badge
                                size="lg"
                                className="badge"
                                pill
                                color="primary"
                            >
                                전체 거래량
                            </Badge>
                            <span>
                                해당 NFT의 전체 거래량
                            </span>
                        </div>
                </div>
            </div>
            )}
            {projectInfo&&(
            <div className="projectInfoBoxWrapper">
                {loading && <Spinner />}
                    <div className="projectBox">
                        <div className="projectBoxItem">
                            <Badge
                                size="lg"
                                className="badge"
                                pill
                                color="primary"
                            >
                                바닥가격
                            </Badge>
                            <span className="badgeValue">
                                {projectInfo.floor_price}
                            </span>
                        </div>
                        <div className="projectBoxItem">
                            <Badge
                                size="lg"
                                className="badge"
                                pill
                                color="primary"
                            >
                                발행 NFT 수량
                            </Badge>
                            <span className="badgeValue">
                                {projectInfo.count}
                            </span>
                        </div>
                        <div className="projectBoxItem">
                            <Badge
                                size="lg"
                                className="badge"
                                pill
                                color="primary"
                            >
                                소유자 수
                            </Badge>
                            <span className="badgeValue">
                                {projectInfo.num_owners}
                            </span>
                        </div>
                        <div className="projectBoxItem">
                            <Badge
                                size="lg"
                                className="badge"
                                pill
                                color="primary"
                            >
                                금일 평균 거래 가격
                            </Badge>
                            <span className="badgeValue">
                                {projectInfo.one_day_average_price.toFixed(1)}
                            </span>
                        </div>
                        <div className="projectBoxItem">
                            <Badge
                                size="lg"
                                className="badge"
                                pill
                                color="primary"
                            >
                                전체 거래량
                            </Badge>
                            <span className="badgeValue">
                                {projectInfo.total_volume.toFixed(1)}
                            </span>
                        </div>
                    </div>
            </div>
            )}
        </div>
    );
}

export default DetailBody;
