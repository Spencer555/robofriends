import React from 'react';
import CardList from '../Components/CardList';
// import { robots } from './robots';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry';

class App extends React.Component {
    constructor() {
        super()
        // any component with state is a smart component
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount (){
        console.log('check')
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        .then(users => this.setState({'robots':users}))
    }

    // anytime u make your own components use arrow functions to avoid errors
    onSearchChange = (event) => {
        event.preventDefault()
        this.setState({ searchfield: event.target.value })

    }
    render() {

        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            })
        
            return !robots.length ?
                <h1>Loading....</h1>
            : (
                    <div className='tc'>
                        <h1 className='tc f2 '>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                            {/* if there is and error the error boundry would handle it gracefully */}
                            <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                        </Scroll>
                    </div>
                )
            }
    
    
}

export default App