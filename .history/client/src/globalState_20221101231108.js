import axios from "axios";
import React,{createContext,useEffect,useState} from "react";
import ProductsAPI from "./api/ProductsAPI";



export const GlobalState = createContext()



export const DataProvider = ({children})=>{
    const[token, setToken]=useState(false)
    
    const refreshToken = async()=>{
        const token = await axios.get('user/refresh_token')
        console.log(token);
    }

    useEffect(() => {
        const firstlogin = localStorage.getItem('firstLogin')
        refreshToken()
    }, []);

    ProductsAPI()
    const state ={
        token: [token, setToken],
        productsAPI: ProductsAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}