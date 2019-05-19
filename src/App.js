import React, { Component } from 'react';
import './App.css';
// import logo from './img/logo.png';
// import eosimg from './img/img_jifen.png';

class App extends Component {


  onDevIOSStaingClickHandle = () => {
    window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/app/05152041/cceos.plist';
  }

  onDevAndroidStaingClickHandle = () => {
    window.location.href = 'https://net.huanmusic.com/eos/app/05081157/cceos-dev.apk';
  }

  onTestIOSProductionClickHandle = () => {
    window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/test/05191147/cceos.plist';
  }

  onTestAndroidProductionClickHandle = () => {
    window.location.href = 'https://net.huanmusic.com/eos/test/05191147/cceos-test-release.apk';
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="eos-logo" alt="logo" />
          
          <span className="eos-title">升腾雨滴</span>

          <div onClick={this.onDevIOSStaingClickHandle} className="update-button update-ios">
            测试环境iOS下载
          </div>
          <div onClick={this.onDevAndroidStaingClickHandle} className="update-button update-android">
            测试环境Android下载
          </div>

          <div onClick={this.onTestIOSProductionClickHandle} className="update-button update-ios" style={{marginTop: '40px'}}>
            内部生产环境iOS下载
          </div>
          <div onClick={this.onTestAndroidProductionClickHandle} className="update-button update-android">
            内部生产环境Android下载
          </div>


          <div className="eos-img" alt="eos-img" />
        </div>
      </div>
    );
  }
}

export default App;
