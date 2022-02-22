import React from 'react';
import GlobalModalProvider from "HOC/GlobalModalProvider";
import GlobalThemeProvider from "HOC/GlobalThemeProvider";
import MainLayoutN from "Layouts/MainLayout/MainLayoutN";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {change: true}
    }
    render(){
        return(
            /*Вариант без React.createContext*/

            /*<GlobalModalProvider render={(setModalContent) =>{             //stuffToShow - props, который рендерит. Таким образом получаем изнутри компонента GlobalModalProvider значение и вставляем в MainLayout
                    return (<MainLayout setModalContent={setModalContent}/>)
                    //Комментарий по поводу render prop
                    //https://www.geeksforgeeks.org/react-js-render-props/
             }}/>*/

            /*Вариант с React.createContext*/

            <GlobalThemeProvider>
                <GlobalModalProvider>
                    <MainLayoutN/>
                </GlobalModalProvider>
            </GlobalThemeProvider>
        )
    }
}

export default App;