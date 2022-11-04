import React,{createContext, useContext,useState} from "react";
import ProductsAPI from "./api/ProductsAPI";



export const GlobalState = createContext()



export const DataProvider = ({children})=>{
    const[token, setToken]=useState(false)
    
    



    ProductsAPI()
    const state ={
        token: [token, setToken],
        productsAPI: ProductsAPI()
    }

    return (
        <GlobalState.Provider value={"Value"}>
            {children}
        </GlobalState.Provider>
    )
}