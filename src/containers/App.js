import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield : ''
        }
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots : users});
        })
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
        
        
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className = 'tc'>
            <h1 >ROBOFRIENDS</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <ErrorBoundary>
                <CardList robots = {filteredRobots}/>
            </ErrorBoundary>
            </div>
        );
    }
}
export default App;