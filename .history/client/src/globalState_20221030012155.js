import React,{createContext, useContext,useState} from "react";
import ProductsAPI from "./api/ProductsAPI";



export const GlobalState = createContext()



export const DataProvider = ({children})=>{
    const[token,setToken]=useState(false)    
    ProductsAPI()

    return (
        <GlobalState.Provider value={"Value"}>
            {children}
        </GlobalState.Provider>
    )
}