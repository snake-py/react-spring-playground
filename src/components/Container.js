import React, { Component } from 'react'

export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            componentToRender: props.componentToRender
        }
    }
    
    render() {
        return (
            <div className="container" >
             {this.state.componentToRender}   
            </div>
        )
    }
}
