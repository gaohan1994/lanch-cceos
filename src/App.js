import React, { Component } from 'react';
import './App.css';

class App extends Component {

  onIOSClickHandle = () => {
    window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/production/05131931/cceos.plist';
  }

  onAndroidClickHandle = () => {
    window.location.href = 'https://net.huanmusic.com/eos/production/05131931/cceos-release.apk';
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
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
