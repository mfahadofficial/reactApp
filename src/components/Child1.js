import React, { Component } from 'react';


class Child1 extends Component {

    render() {
        return(
            <div>
                <h1>2: This is child1Prop "{ this.props.name }" </h1>
            </div>
        )
    }
}

export default Child1;