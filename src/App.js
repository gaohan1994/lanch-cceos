import React, { Component } from 'react';
import './App.css';
// import logo from './img/logo.png';
// import eosimg from './img/img_jifen.png';

class App extends Component {

  onIOSClickHandle = () => {
    window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/app/01251404/cceos.plist';
  }

  onAndroidClickHandle = () => {
    window.location.href = 'https://net.huanmusic.com/eos/app/04041423/cceos.apk';
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          {/** 
          <img className="eos-logo" alt="logo" src="//net.huanmusic.com/eos/lanch/logo.png"/>
          <img className="eos-img" alt="eos-img" src="//net.huanmusic.com/eos/lanch/img_jifen.png" />
          */}
          <div className="eos-logo" alt="logo" />
          
          <span className="eos-title">升腾雨滴</span>
          <div onClick={this.onIOSClickHandle}  className="eos-button eos-ios" />
          <div onClick={this.onAndroidClickHandle} className="eos-button eos-android" />
          <div className="eos-img" alt="eos-img" />
        </div>
      </div>
    );
  }
}

export default App;