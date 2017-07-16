import React, { Component } from 'react';

class Operator extends Component {
    constructor(props) {
        super(props);
        this.chooseOperator = this.chooseOperator.bind(this);
    }
    chooseOperator(operator) {
        this.props.callBackFun(operator);
    }
    render() {
        return (
            <div>
                <input type="button" value="+" onClick={()=>this.chooseOperator('+')} />
                <input type="button" value="-" onClick={()=>this.chooseOperator('-')} />
            </div>
        )
    }
}

module.exports = Operator;