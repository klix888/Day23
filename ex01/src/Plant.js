import React, { Component } from 'react';

class Plant extends Component {
   constructor(props) {
       super(props);
       this.state = { type: "Flowering Plant" };
   }
   
    render() {
        return <h2>This is a Plant Component!</h2>
    }
    
}

export default Plant;