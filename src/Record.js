import React, { Component } from 'react';

class Record extends Component {
    constructor(props) {
        super(props);
        this.removeLog = this.removeLog.bind(this);
    }
    removeLog(seq) {
        this.props.callBackFun(seq);
    }
    render() {
        const listItems = this.props.log.map((rec) =>
            <div key={rec.seq} onClick={this.removeLog.bind(this, rec.seq)}>
                {"Seq : " + rec.seq + " : " + rec.preCalVal + " " + rec.caloper + " " + rec.calVal + " = " + rec.total}
            </div>
        );
        return (
            <div>
                {listItems}
            </div>
        )
    }
}

module.exports = Record;