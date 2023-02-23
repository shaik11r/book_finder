import { createContext, useContext, useState } from "react";
import useFetch from "./useFetch";
const AppContext=createContext();
const AppProvider=({children})=>{
    const [query,setQuery]=useState('rich dad');
    const {loading,data}=useFetch(`q=${query}`)
    return(
        <AppContext.Provider value={{loading,data,setQuery}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext=()=>useContext(AppContext);
export {AppProvider};