import React, { Component } from 'react';
import {Button} from 'amazeui-react';


require('../styles/main.css');


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.interval = setInterval(() => this.tick(), 1000);
    }

    tick() {
        this.setState({
            counter: this.state.counter + this.props.increment
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <h1 style={{ color: this.props.color }}>
            Counter ({this.props.increment}): {this.state.counter}
            </h1>
        );
    }
}

export class App extends Component {
    render() {
        return (
            <div>
            <Button>"Buton"</Button>
            <Button>"Button"</Button>
            <div className="header">  <div> this is header  </div> </div>
            <Counter increment={1}  />
            <Counter increment={5} color="green" />
            </div>
        );
    }
}
