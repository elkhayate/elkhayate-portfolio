import axios from 'axios';
import {createContext, useState, useEffect} from 'react';

export const DataContext = createContext();


export default function DataContextProvider(props){
    const [loading, setLoading] = useState(true);
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        let url = "http://localhost:8080/skills";
        axios
            .get(url)
            .then(function(response){
                setSkills(response.data);
                setLoading(false);
                console.log(response.data);
            })
            .catch(function(err){
                console.log(err);
            })
    }, [])

    return(
        <DataContext.Provider value={{skills, loading}}>
            {props.children}
        </DataContext.Provider>

    )
}

