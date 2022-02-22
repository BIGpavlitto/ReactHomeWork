import React, {memo, useState} from "react";

import{
    ThemeProvider,
    createGlobalStyle,
    //StyleSheetManager
} from "styled-components";

export const ThemeContext = React.createContext('');

export const GlobalStyles = createGlobalStyle`
  body {
  margin: 0;
  background-color: ${props => props.theme.basicBackGroundColor};
  }
`;

export const globalDarkStyle = {
    appBaseFontColor: "white",
    navbarBackgroundColor: "#212323",
    basicBackGroundColor: "#313534",
    infoCardBackgroundColor: "#3f4342",
    accentBackgroundColor: "#4a4f4e",
    accentTextColor: "#f5c415",
};

export const globalLightStyle = {
    appBaseFontColor: "black",
    navbarBackgroundColor: "#7C7B76",
    basicBackGroundColor: "#F2F0E6",
    infoCardBackgroundColor: "#C2C0B8",
    accentBackgroundColor: "#4a4f4e",
    accentTextColor: "#93c54b",
};


const GlobalThemeProvider = (props) => {
    const [isThemeGreen, setIsThemeGreen] = useState(false);

    const toggleTheme = () =>{
        setIsThemeGreen(!isThemeGreen);
    }

    return(
        <ThemeProvider theme={isThemeGreen? globalLightStyle : globalDarkStyle}>
            <ThemeContext.Provider value={toggleTheme}>
                <GlobalStyles/>
                    {props.children}
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}

export default memo(GlobalThemeProvider);