import React, {useEffect, useState} from 'react';
import Card from "Components/Card/Card";
import styled from 'styled-components';

const StyledTaskListWrapper = styled.div`
  display: inline;
  flex-wrap: wrap;
`

const StyledLoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.accentTextColor};
  font-size: 25px;



`
const list = [
    {cardName: "1", cardText: "1"},
    {cardName: "2", cardText: "2"},
    {cardName: "3", cardText: "3"},
    {cardName: "4", cardText: "4"},
    {cardName: "5", cardText: "5"},
]
const TaskList = (props) => {
    const[cardList, setCardList] = useState(null);
    const[cardListHeader, setCardListHeader] = useState(/*"Initial state"*/);

    //Обычно при перерендывании всего компонента, все что внутри компонента перерендывается автоматически
    //Hook useCallback полезно использовать, когда в компоненте есть функции(я), которые(ая) требуют(ет) сохранения в себе нужной операции на определенном этапе и не перерендывать именно их в процессе перерендывания всего компонента

    //При изменении state/props в deps, меняется внутренность функции, но компонент не перерендывается, если не поменяны state/props.

    /*//Полезно использовать useCallback hook, если компонент содержит дочерний(дочерние) компонент(ы), которые часто перерендываются.
    const handleCardDelete = useCallback( //Избегает ненужного рендера дочернего компонента при изменении родительского компонента при условии, что props/state родительского компонента не меняется, указанных в deps.
        (index) => () => {
            setCardList(cardList.splice(index, 1));
        }, [cardList]   //При указании props/state родительского компонента в deps и хоть одного изменения в нем, то данный компонент перерендерится, для которого были указаны props/state
    )               // Если deps пустой(но! не отстуствовать), то при первой загрузке компонента в браузер, сработает один раз useCallback и cardList будет браться с initial state + произойдет рендер
    //Осторожно использовать hook useCallback*/


    const handleCardDelete = (index) => () =>{
        //Создаем новый объект, чтобы react увидел изменения объекта для hook useState и перерендования страницы
        let newCardList = [...cardList];
        newCardList.splice(index, 1);
        setCardList(newCardList);
    }

    //UseMemo hook используется для сохранения переменной для дальнейшего использования, при этом компонент может много раз перерендиться.
    //Переменная сохраняется в памяти и позже может быть использована. Этим достигается оптимизация компонента.
    //https://stackoverflow.com/questions/56910036/when-to-use-usecallback-usememo-and-useeffect
    //const superHeader = cardList.map(task => task.cardName).join('%');

    //UseRef используется для того, чтобы напрямую работать с DOM вне react, также сохранять значение, которое не вызывает перерендывание компонента.

    //If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
    // To avoid this, we can use the useRef Hook.
    //useRef() only returns one item. It returns an Object called current.
    // When we initialize useRef we set the initial value: useRef(0).
    // It's like doing this: const count = {current: 0}. We can access the count by using count.current.
    //In general, we want to let React handle all DOM manipulation.
    // But there are some instances where useRef can be used without causing issues.
    // In React, we can add a ref attribute to an element to access it directly in the DOM.

    useEffect(() =>
    {
        setTimeout(() =>{
            setCardList(list);
        }, 2000);
    }, []);

    if(!cardList){
        return <StyledLoadingWrapper>
            Loading...
        </StyledLoadingWrapper>
    }

    return(
        <StyledTaskListWrapper>
            <div className={'cardList'}>
                {/*superHeader*/}
                {cardListHeader}
                {cardList.map((taskInfo, index) =>
                    <Card deleteCard={handleCardDelete(index)}  //дочерний компонент для TaskList
                    key={index}
                    cardName={taskInfo.cardName}
                    /*props drilling*/
                    /*showModal={props.showModal}*/
                    /*no props drilling - удаляем showModal*/
                    cardText={taskInfo.cardText}/>
                    )}
            {/*<button onClick={() =>{setCardListHeader("newCardName")}}>Click me!</button>*/}
            </div>
        </StyledTaskListWrapper>
    )
}

export default TaskList;