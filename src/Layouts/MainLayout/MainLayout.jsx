//import React from 'react';
//import TaskList from "Scenes/TaskList/TaskList";
//css loader делает hash функцию в виде стринга, пример styles.header = 'dasdsadk'.
//import styles from 'styles/globalStyles.css';

//Классовый компонент(здесь в качестве примера)
/*class MainLayout extends React.Component{
    constructor(props) {
        super(props);

        this.state = {headerText: "Header", footerText: "Footer"};
        this.counter = 0;
    }

    changeText(){
        this.setState({headerText: "New Header"});
        this.intervalID = setInterval(() => {
            this.counter++;
            this.setState((state) => {`${state.headerText}!`}, () => {});   //принимает объект или функцию (state) для обновления state, и callback, который всегда выполнится после обновления state
        }, 1000)
    }


    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    updateHeader = (value) => {
        this.setState({headerText: value})
    }

    componentDidCatch(error, errorInfo) {
        //Срабатывает тогда, когда при рендере случилась ошибка
        //console.log('got error', error, errorInfo)
    }

    render(){
        return(
            <div className={'layout'}>
                <div className={'header'}>
                    {this.state.headerText}
                </div>
                <button onClick={() =>{this.changeText()}}>Click me!</button>
                <Card cardName={'render me'} setNewHeader={this.updateHeader}/>
                <div className={'footer'}>
                    {this.state.footerText}
                </div>
            </div>
        )
    }
}*/
//-----------------------------------------------------------------------------------------------------------

/*class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {modalContent: 0};
    }

    componentDidCatch(error, errorInfo) {
    }

    /!*showModal = (content) =>{
        this.setState({modalContent: content});
    }*!/

    render() {
        return (
            <div className={styles.layout}>
                <div className={styles.header}>
                    Header updated
                </div>
                <div className={styles.content}>
                    {/!*props drilling*!/}
                    {/!*<TaskList showModal={this.props.setModalContent}/>*!/}
                    {/!*no props drilling с React.createContext*!/}
                    <TaskList/>
                </div>
                <div className={styles.footer}>
                    Footer
                </div>
            </div>
        )
    }
}

export default MainLayout;*/

