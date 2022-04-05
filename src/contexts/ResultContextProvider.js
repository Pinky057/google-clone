import React,{createContext, useContext, useState} from 'react';

const ResultContext= createContext();
const baseUrl='https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
    const [results, setResults] =useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    //videos, /serach, /images...

    const getResults =async(type) =>{
        setIsLoading(true);
        const response = await fetch(`${baseUrl}/${type}`,{
            method:'GET',
            headers:{
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': 'e44850eda8msh94fd983e19015eep1f3a52jsn6cf0bf3a3c89'
            }

    });
    const data = await response.json();
    setResults(data);
    setIsLoading(false);

 }
 return(
     <ResultContext.Provider value={{results, isloading, getResults, searchTerm, setSearchTerm}}>
         {children}
     </ResultContext.Provider>
 )
}
export const useResultContext = () => useContext(ResultContext);