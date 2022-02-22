import React, {useState} from "react";

//Для избежания props drilling используется createContext и useContext hook
//React.createContext создает объект
//https://www.w3schools.com/react/react_usecontext.asp
export const ModalContext = React.createContext(false);


//HOC - higher order component(компонент высшего порядка)
//Принцип HOC заключается в том, что (1) данный компонент оборачивает в себя все остальное приложение или часть данного приложения, (2)
//его можно использовать на любом уровне приложения завернув в него какой-то компонент, у которого внешне появятся новые доп свойства.
const GlobalModalProvider = (props) => {
    const [modalContent, setModalContent] = useState();


    return <React.Fragment>
        {/*Интегрируем модальное окно здесь*/}
        {/*Прячем модальное окно*/}
        {!!modalContent &&         // && --> тогда возвращать/Если this.state.modalContent будет 0 в state, то react не отобразит модально окно, но отрендерит 0 в браузере. Для избежания этого, нужно поставить !!this.state.modalContent, чтобы 0 не отрендерился
        <div className={'modal'}>
            {modalContent}
        </div>
        }
        <ModalContext.Provider value={setModalContent}>
            {//value которое передается в данном ModalContext.Provider ниже по иерархии компонентов в props.children.
            }
            {props.children}
        </ModalContext.Provider>
        {//props.children отображает все то, что находится между открывающимся и закрывающимся тегами компонента GlobalModalProvider. Если контент помещен в форме одного тега формата props, то через них передаем children.
            //Если функция setModalContent сработает, то компонент GlobalModalProvider сработает поверх обернутого компонента MainLayout.
            //Точка отчета и вставка самого компонента GlobalModalProvider происходит здесь, после того, как setModalContent прошел сверху вниз до компонента Card и обновил modalContent.
            //props.render(setModalContent)
        }
    </React.Fragment>
}

export default GlobalModalProvider
