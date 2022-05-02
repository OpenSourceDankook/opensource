import { url } from "./config.js";
import axios from "axios";

export const nft = async () => {
    try {
        const res = await axios.get(`${url}`);
        const data = res.data;
        console.log(data, "resolved nft Data");
        return data;
    } catch (e) {
        alert(e);
    }
};
