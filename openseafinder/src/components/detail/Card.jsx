import React from "react";
import "./Card.css";

function Card() {
    function clickCard(e){
        window.location.href = "/main";
    }
    return (
        <div class="container">
            <div class="card" onClick={clickCard}>
                <img src="https://lh3.googleusercontent.com/rRRgKw4M4T5t9s_ja7ioZw8Pe1dc1C--_QGo6yONMywm1DRZb4cCttLWF-b9VF3nPCAJHoN33MsZNL6THz5bVZVGBk56yUlGBSbz=w600"/>
            </div>
            <div class="card" onClick={clickCard}>
                <img src="https://lh3.googleusercontent.com/1C9qDXkDgnmxMwRAcnzibEAF8WJCX4lEuNVS8-zbPx7W02i7dqJqEMuP92SV9HBjj7Kl9ucVilUqiim53gpSmB5Rvsdj_GaDKQ3mFg=w600"/>
            </div>
            <div class="card" onClick={clickCard}>
                <img src="https://lh3.googleusercontent.com/w9hDDhNyRVb_j1DP-wZv3y8s5hf-9GzT6PTSYG4HkZ4dgDTinUaIhByLNGKxNHm7re4Y1KVrmCM3zCHc1OvFPpEEXg8gWXss4Kx6=w600"/>
            </div>            
        </div>
    );
}

export default Card;
