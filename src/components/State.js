import React, { Component } from 'react';
import StateProp from './StateProp';

class State extends Component {

    constructor(props) {  
        super(props);        
        this.state = { displayBio: true, name: "stateValues123" }; 
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);   
        }  

        toggleDisplayBio(){  
            this.setState({displayBio: !this.state.displayBio});  
            }  

        render() {  
            const bio = this.state.displayBio ? (  
                <div>  
                    <p><h3>State is True .</h3></p>   
                    <button onClick={this.toggleDisplayBio}>Click to Hide state </button> 
              </div>  
                ) : <button onClick={this.toggleDisplayBio}> click to show state </button>   ;  
                return (  
                    <div>  
                        <h1>4: State test!! </h1>  
                        { bio } 

                        <StateProp spVal = {this.state.name}/>  
                    </div>  
                );  
       }  
  }  

export default State;