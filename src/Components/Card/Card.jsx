import React, {useState, useEffect, useContext} from 'react';
//ModalContext обеспечит связь в две стороны.
import {ModalContext} from "HOC/GlobalModalProvider";
import styled from 'styled-components';
//import styles from './card.module.css';

//Стили для данного StyledCard компонента через библиотеку styled-components
const StyledCard = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${props => props.theme.infoCardBackgroundColor};
    margin: 20px;
    border-radius: 5px;
    display: inline-block;
 
 .cardHeader{
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    box-sizing: border-box;
    background-color: ${props => props.theme.accentBackgroundColor};     //props которые были переданы StyledCard!!!
    font-size: 25px;
    line-height: 30px;
    color: ${props => props.theme.accentTextColor};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
 }
 
  .cardBody{
    padding: 10px 20px;
    box-sizing: border-box;
    color: ${props => props.theme.appBaseFontColor};
  }
  
  .cardFooter{
    padding: 10px 20px;
    box-sizing: border-box;
    //display: flex;
    //align-items: center;
    //justify-content: space-between;
  }
`

//Функциональный компонент есть аналог Pure Component
//Pure Component использует тогда, когда нужно, чтобы дочерний элемент не перерересовывался каждый раз(до тех пор пока не поменяются props или state), когда перересовывается родительский элемент
//Обычный компонент пересовывается каждый раз, когда пересовывается родительский элемент
const Card = (props) => {
    //установка state/setstate для функционального компонента
    const[newCardName, setNewCardName] = useState(props.cardName); //props.cardName первое значение state в момент первого рендера компонента, т.е. до вызова setCardName()
    //Вызывает новый state и функцию обновления state - setNewCardName
    //ВАЖНО! Данный hook вызывает рендер и перерендер компонента, остальные нет!

    //Каждый раз, когда переменная ModalContext меняется, то за счет useContext hook компонент Card перерендывается
    const setModalContent = useContext(ModalContext);


    const handleNewCardNameInput = (event) =>{
        setNewCardName(event.target.value);
    }

    //Hook useEffect используется для изменения логики поведения на изменение state/props, переданных в deps
    //При отработке hook компонент не перерендывается, если только не поменяны state/props.

    useEffect(() =>{}, []); //Каждый раз как меняется хоть одна переменная в deps, то срабатывает переданная функция в виде callback
    //Если deps будет пустым, то useEffect сработает один раз при полной разгузки компонента в браузер
    //Если deps будет вообще отстутствовать, то useEffect будет срабатывать каждый раз при рагрузке компонента в браузер(бесконечный цикл)

    return(
        <StyledCard percentDone={Math.floor(Math.random() * 100)}>
            <div className={'cardHeader'}>
                {props.cardName}
            </div>
            <div className={'cardBody'}>
                {props.cardText}
            </div>
            <div className={'cardFooter'}>
            {/*<input onChange={handleNewCardNameInput} value={newCardName}/>*/}
            {/*<button onClick={()=>{props.setNewHeader(newCardName)}}>Click me!</button>*/}
            {/*<button onClick={() => props.deleteCard(newCardName)}>Click me!</button>*/}
            {/*<button onClick={() => {props.showModal('Are you sure to delete this task?')}}>Click me!</button>*/}
            {/* в showModal можно передать также и верстку*/}
                <button onClick={() =>
                    /*props drilling*/
                    /*props.showModal(   //передача одного и того же props сверху вниз от компонента к компоненту(MainLayout--TaskList--Card) называется props drilling
                        <div>
                            You sure?
                            <button>Yes</button>
                            <button onClick={() => {props.showModal()}}>No</button>
                        </div>
                    )*/
                    /*no props drilling*/
                    {setModalContent(
                        <div>
                            You sure?
                            <button>Yes</button>
                            <button onClick={() => {setModalContent()}}>No</button>
                        </div>
                    )}}>Click me!</button>
            </div>
        </StyledCard>
        //При клике передается аттрибуту setNewHeader вверх значение value для замены в родительском компоненте
)
}

export default Card;

//export default React.memo(Card) используется для записи данного компонента и лишний раз не трогать его. Используется для обычного компонента