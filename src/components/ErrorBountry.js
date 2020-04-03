import React, { Component } from 'react'

export default class ErrorBountry extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }

    componentDidCatch(error, info){
        this.setState({
            hasError:true
        })
    }
    render() {
        return this.state.hasError?
        <h2>Something wrong</h2>:
        this.props.children
    }
}
