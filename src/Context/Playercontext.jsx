import React, { createContext, useRef } from "react";

export const Playercontext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();


    const contextValue = {
        audioRef,
        seekBar,
        seekBg
    };

    return (
        <Playercontext.Provider value={contextValue}>
            {props.children}
        </Playercontext.Provider>
    );
};

export default PlayerContextProvider;
