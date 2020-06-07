import React, { Component } from 'react'

class State extends Component {
    state = {
        name : 'Amanudin Harahap',
        age: 20
    }
    render() {
        return (
            <div>
                <h4>Hello, My name is {this.state.name}. and I {this.state.age} years old</h4>
            </div>
        )
    }
}

export default State
