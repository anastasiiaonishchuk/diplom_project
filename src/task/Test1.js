import React, { Component } from 'react'
import {connect} from 'react-redux';
import {loadItems} from '../actions/tests.actions'
import {addScore} from '../actions/score.action'

import './tests.css'
 let scor = 0;
export class Test1 extends Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            cnt: 0,
            choosenAnswers: [],
            rightAnswers: [],
            b: ""
        };

    }
    getItems=()=>{

        return this.props.tests.map(el => (
            <div onFocus={this.getAnswers.bind(this)}>
                Вопрос {el.testId}: {el.question} <br />
                <input id="var1" type="radio" name={el.id} className="radioBut" value={el.rightAnsw} /> {el.answ1}<br />
                <input id="var2" type="radio" name={el.id} className="radioBut" value={el.rightAnsw} /> {el.answ2}<br />
                <input id="var3" type="radio" name={el.id} className="radioBut" value={el.rightAnsw} /> {el.answ3}<br />
                <input id="var4" type="radio" name={el.id} className="radioBut" value={el.rightAnsw} /> {el.answ4}<br />
            </div>
        ));
    };

    getAnswers = (event) => {
        this.state.choosenAnswers.length = this.props.tests.length;
        this.state.rightAnswers.length = this.props.tests.length;
        this.state.choosenAnswers[event.target.name - 1] = event.target.id;
        this.state.rightAnswers[event.target.name - 1] = event.target.value;
    }
    checkAnswers = () => {
        for (let i = 0; i < this.state.choosenAnswers.length; i++) {
            if (this.state.choosenAnswers[i] !== undefined) {
                if (this.state.choosenAnswers[i] === this.state.rightAnswers[i]) {
                    this.state.cnt++;
                    //this.setState(function(prevState){
                    // return {cnt: prevState.cnt + 1}
                    // });             
                }
            }
        }
    }

    someFunc = () => {
        this.checkAnswers();
         scor = Math.floor((this.state.cnt * 100) / this.props.tests.length);
        console.log(scor);
       // return scor;
        this.props.addScore(scor);
        this.setState({ cnt: 0 });

    }
    getElementB = ()=>{
        this.state.b = "buttonn"
    }
    render() {    

        return (
            <div className="Test">
            <button className={this.state.b} onClick={this.getElementB()} ><div onClick={this.props.loadItems}>click</div></button>
                <form>{this.getItems()}
                </form>
                <button className="butClass" onClick={() => { this.someFunc() }}>Отправить</button>
            </div>
        )
    }
}
export default connect(
    (state)=>({
        tests: state.tests,
        score: state.score
    }),
    (dispatch)=>({
        loadItems: ()=> {
            dispatch(loadItems());
        },
        addScore: (score)=>{
            dispatch(addScore(score));
        }
    }),
)(Test1);