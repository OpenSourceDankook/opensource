import React from "react";
import "./Card.css";

function Card({ assetData }) {
    return (
        <a href={assetData.external_link}>
            <div class="card">
                <img src={assetData.image_preview_url} />
            </div>
        </a>
    );
}

export default Card;
