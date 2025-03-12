import React, { Component } from 'react';

//import Card from './card';
import Cardlist from './cardlist';
//import { robots } from './robots';
import SearchBox from './searchBox';
import { RandomGradientBackground } from './extra';
import Scroll from './scroll';




class App extends Component {
  constructor(){
      super()
      this.state = {
          robots: [], 
          searchfield: ""   
      }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({robots: users}));
}

  onSearchChange = (event) =>{

    this.setState({searchfield:event.target.value})
  
}

  render(){

    const {robots, searchfield} = this.state;

    const filteredRobots = robots.filter((robots) =>{
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());   
   })

   if (robots.length === 0){
    return (<div>
    <RandomGradientBackground/>
    <h1 className='tc'>Loading</h1></div>)
} else {

  return ( 
<div className='tc'>
  <RandomGradientBackground/>
<h1 className="tc f1">Robofriends</h1>
<SearchBox searchChange={this.onSearchChange}/>

<Scroll>
    <Cardlist robots={filteredRobots}/>
    </Scroll>
    </div>
   );
}}}
 
export default App;