import logo from './logo.svg';
import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import State from './components/State';
import React, { Component } from 'react';  
class App extends React.Component {  
   render() {     
      return (  
          <div>  
              <h1>CyberNEst </h1>  
            <h3>1: this is default prop "{this.props.name}"</h3>   
            <Child1 name = "zahid@cybernest!!" />   
            <Child2  work = "Development!!" />      
            <State/>  
          </div>  
        );  
    }  
}  
App.defaultProps = {  
   name: "CyberNEst"  
}  
export default App;  
