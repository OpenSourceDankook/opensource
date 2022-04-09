import { url } from "./config.js";
import axios from "axios";

export const card = async () => {
    try {
        const res = await axios.get(`${url}`);
        const data = res.data;
        return data;
    } catch (e) {
        alert(e);
    }
};
