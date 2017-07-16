import React, { Component } from 'react';
import ButtonValue from './ButtonValue'
import Operator from './Operator'
import Record from './Record'
class Result extends Component {
    constructor(props) {
        super(props);
        this.state = { caloper: '', calVal: 0, total: 0, log: [], seq: 0 };
        this.chooseValue = this.chooseValue.bind(this);
        this.chooseOperator = this.chooseOperator.bind(this);
        this.revertAction = this.revertAction.bind(this);
    }

    chooseValue(num) {
        this.setState((prevState, props) => {
            let newState = null;
            let id = prevState.seq + 1;
            let logg = prevState.log;

            if (prevState.caloper == '') {
                newState = { calVal: num };
            }
            else {
                newState = {
                    total: eval(prevState.total + prevState.caloper + num),
                    calVal: num,
                    caloper: prevState.caloper,
                    log: logg,
                    seq: id
                };
                const newlog = Object.assign({}, id, newState, { preCalVal: prevState.total });
                delete newlog.log;
                logg.push(newlog);
            }
            return newState;
        });
    }
    chooseOperator(oper) {

        this.setState((prevState, props) => {
            let newState = null;
            let id = prevState.seq + 1;
            let logg = prevState.log;

            newState = {
                total: eval(prevState.total + oper + prevState.calVal),
                calVal: prevState.calVal,
                caloper: oper,
                log: logg,
                seq: id
            };
            const newlog = Object.assign({}, id, newState, { preCalVal: prevState.total });
            delete newlog.log;
            logg.push(newlog);
            return newState;
        });
    }

    revertAction(seq) {
        this.setState((prevState, props) => {
            var reverlog = prevState.log.find(o => o.seq == seq);
            var otherlog = prevState.log.filter(function (obj, index) {
                return obj.seq != seq;
            });
            let newTotal = 0;
            if (reverlog.caloper == '+') {
                newTotal = prevState.total - reverlog.calVal;
            }
            else {
                newTotal = prevState.total + reverlog.calVal;
            }

            return {
                caloper: '',
                calVal: 0,
                total: newTotal,
                log: otherlog
            }
        });
    }

    render() {
        return (
            <div>
                <ButtonValue callBackFun={this.chooseValue} />
                <Operator callBackFun={this.chooseOperator} />
                Value:{this.state.calVal}<br />
                Operator:{this.state.caloper}<br />
                Total:{this.state.total}<br />
                <div>Log:</div>
                <Record log={this.state.log} callBackFun={this.revertAction} />
            </div>

        )
    }
}

module.exports = Result;