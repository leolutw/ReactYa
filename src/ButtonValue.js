import React, { Component } from 'react';

class ButtonValue extends Component {

    constructor(props) {
        super(props);
        this.chooseValue = this.chooseValue.bind(this);
    }
    chooseValue(num) {
        this.props.callBackFun(num);
        console.log(num);
    }

    render() {
        return (
            <div>
                <input type="button" value="1" onClick={()=>this.chooseValue(1)} />
                <input type="button" value="2" onClick={()=>this.chooseValue(2)} />
                <input type="button" value="3" onClick={()=>this.chooseValue(3)} />
            </div>
        )
    }
}

module.exports = ButtonValue;