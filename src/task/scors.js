import React, { Component } from 'react'
import { Test1 } from './Test1'

export class Scor extends Component{
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            cnt: 0,
            choosenAnswers: [],
            rightAnswers:[]
        };
    }
    render(){
        return(
            <div> 
                {this.props.scor}
            </div>
        )
    }
}