import React from 'react'


class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // like the try catch block in js 
    componentDidCatch(error, info){
        this.setState({hasError:true})
    }

    render() {


        if (this.state.hasError) {
            return <h1>there is an error </h1>

        } else {
            return this.props.children
            // otherwise return error
        }

    }
}

export default ErrorBoundry