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
    const hrefParams = encodeURIComponent('transfer>receiveUser=gaohan111111&sendUser=gaohan123456');
    window.location.href = `cceos://${hrefParams}`;
  }

  render() {
    return (
      <div className="App">
        <span>
          test open app
        </span>
      </div>
    );
  }
}

export default Packet;
