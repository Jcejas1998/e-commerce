import React,{createContext, useContext,useState} from "react";

export const GlobalState = createContext()



export const DataProvider = ({children})=>{
    return (
        <GlobalState.Provider value={"Value"}>
            {children}
        </GlobalState.Provider>
    )
}