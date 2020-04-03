import React, { Component } from "react";
 
import "./App.css";
import CardLists from "components/CardLists";

import { robots } from "robots.js";
import Search from "components/Search";
import Scroll from "components/Scroll";
import ErrorBountry from "components/ErrorBountry";

 
class App extends Component  {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
 
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(datas=>this.setState({robots:datas }))
    
 
    
  }
  onSearchChange=(event)=>{
    // console.log(event.target.value);
    const value=event.target.value;
    this.setState({
      searchfield:value
    })  
    
    
  }
  render() {
  const {robots, searchfield}=this.state;
    
    const filteredRobots=robots.filter(robot=>
      {
       return  robot.name.toLowerCase().includes(searchfield.toLowerCase())
      });

 
  return !robots.length? 
  <h1>Loading</h1>:
     (
 
      <div className="App">
        <h1>Robo Friend</h1>
        <Search handleChange={this.onSearchChange}  />
        <Scroll>
          <ErrorBountry>
          <CardLists data={filteredRobots} />
          </ErrorBountry>
        </Scroll>
      </div>
    );
 
  }
}

export default App;
