import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Search from '../components/Search';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots : [] ,
            searchfield : ''
        }
        
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));

    }

    onSearchChange =(event) =>{
                
        this.setState({searchfield : event.target.value});
    }

    render(){
        const stateRobots = this.state.robots;
        const stateSearch = this.state.searchfield;

        const filteredRobot = stateRobots.filter(robot => {
            return robot.name.toLowerCase().includes(stateSearch.toLowerCase());
        })

        return !stateRobots.length ? 
                <h1 style={{ display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>loading...</h1>
                :(
                    <div className='tc'>
                        <h1 className='f1'>search bar project</h1>
                        <Search SearchChange={this.onSearchChange} />
                        <Scroll>
                            <ErrorBoundry>
                                <Cardlist robots = {filteredRobot} />
                            </ErrorBoundry>    
                        </Scroll>
                    </div>
                );
    
    }

}

export default App;
