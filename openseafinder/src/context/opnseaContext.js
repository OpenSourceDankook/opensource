import { createContext, useEffect, useState } from "react";

const OpenseaContext = createContext();

const OpenseaContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    return (
        <OpenseaContext.Provider
            value={{
                loading,
            }}
        >
            {children}
        </OpenseaContext.Provider>
    );
};

export { OpenseaContextProvider, OpenseaContext };
