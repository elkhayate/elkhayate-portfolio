import {createContext, useState} from 'react';

export const ThemeContext = createContext();


export default function ThemeContextProvider(props){
    const [isLight, setLight] = useState(false);
    function switchTheme(){
        setLight(!isLight);
    }
    return(
        <ThemeContext.Provider value = {{isLight, switchTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}