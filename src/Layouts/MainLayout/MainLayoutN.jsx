import React, {useContext} from 'react';
import TaskList from "Scenes/TaskList/TaskList";
import styled from 'styled-components';
import {ThemeContext} from 'HOC/GlobalThemeProvider';

const StyleMainLayout = styled.div`
  width: 100%;
  height: 100%;

.header{
   background-color: ${props => props.theme.navbarBackgroundColor}; 
   width: 100%;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px 20px;
   box-sizing: border-box;
   font-size: 25px;
   color: ${props => props.theme.accentTextColor};
}

.content{
  width: 100%;
  height: calc(100vh - 100px);
  overflow: auto;
}

.footer{
  background-color: ${props => props.theme.navbarBackgroundColor};
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  box-sizing: border-box;
  color: ${props => props.theme.appBaseFontColor};
}
`

const MainLayoutN = (props) => {
    const setGreen = useContext(ThemeContext);

    return(
        <StyleMainLayout>
            <div className={"header"}>
                Header
                <button onClick={setGreen}>Switch theme</button>
            </div>
            <div className={"content"}>
                <TaskList/>
            </div>
            <div className={"footer"}>
                Footer
            </div>
        </StyleMainLayout>
    )
}

export default MainLayoutN