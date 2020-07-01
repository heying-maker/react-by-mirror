
import React, { Component } from 'react';
import { actions } from 'mirrorx';
class Mytest extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    componentDidMount() {
        actions.mytest.load();
// console.log("this.props.userid",this.props);
    }
    componentWillReceiveProps(nextprops) {

    }

    componentDidUpdate() {

    }
    componentWillMount() {

    }
    componentWillUpdate() {

    }

    render() {
        return (
            <div>
                mytest---------
                {/* <a>{this.props.userid}</a> */}

            </div>
        );
    }
}
export default Mytest;