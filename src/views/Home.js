import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super(); //makes sure we are following all of the methods (constructor) of the parent
        this.state = {
            name: 'Shoha',
        }
    }


    render() {
        return (
            <div>
                <h1>This is the Home Page</h1>
                                {/* Just curly braces to add variables in JSX */}
                <h2>This is the home page of {this.state.name}</h2>
                <p>{this.props.age}</p>
                        {/* No parenthesis on the function so it doesn't run until clicked */}
                <button onClick={this.props.happyBirthday}>+</button>
                        {/* .props brings variables and functions in from the parent (APP) */}

                <p>{this.props.testVar}</p>
                <p>{this.props.x}</p>

            </div>
        )
    }
}
