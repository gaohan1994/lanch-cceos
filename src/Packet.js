import React, { Component } from 'react';
import './App.css';

class Packet extends Component {

  constructor (props) {
    super(props);
    this.init();
  }

  init = () => {
    
  }

  componentDidMount() {
    console.log('this.props;', this.props);
  }

  render() {
    return (
      <div className="App">
        <span>
          
        </span>
      </div>
    );
  }
}

export default Packet;
