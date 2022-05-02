import { createContext, useEffect, useState } from "react";
import { nft } from "../api/api";

const OpenseaContext = createContext();

const OpenseaContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const [nftData, setNftData] = useState({
        status: "idle",
        data: null,
    });

    const getNftData = async () => {
        let res = await nft();
        try {
            setNftData({
                status: "pending",
                data: null,
            });
            setNftData({
                status: "resolved",
                data: res,
            });
        } catch (e) {
            setNftData({
                status: "rejected",
                data: null,
            });
        }
    };

    useEffect(() => {
        try {
            getNftData();
            setLoading(false);
        } catch (e) {
            alert(e);
        }
    }, []);

    return (
        <OpenseaContext.Provider
            value={{
                loading,
                nftData,
            }}
        >
            {children}
        </OpenseaContext.Provider>
    );
};

export { OpenseaContextProvider, OpenseaContext };
