import React, { Component } from 'react';
import './App.css';
// import logo from './img/logo.png';
// import eosimg from './img/img_jifen.png';

class App extends Component {


  onDevIOSStaingClickHandle = () => {
    window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/app/05301621/cceos.plist';
  }

  onDevAndroidStaingClickHandle = () => {
    window.location.href = 'https://net.huanmusic.com/eos/app/05311014/app-release.apk';
  }

  onTestIOSProductionClickHandle = () => {
    window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/test/05301917/cceos.plist';
  }

  onTestAndroidProductionClickHandle = () => {
    window.location.href = 'https://net.huanmusic.com/eos/test/05311014/app-release.apk';
  }

  devIosPackage2 = () => {
    window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/app/06121650/cceos.plist';
  }
  devAndroidPackage2 = () => {
    window.location.href = 'https://net.huanmusic.com/eos/app/06271201/app-release.apk';
  }

  openUrl = () => {

  }

  onProIOS = () => {
    window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/app/06272012/cceos.plist';
  }

  onProAndroid = () => {
    window.location.href = 'https://net.huanmusic.com/eos/app/06272012/app-release.apk';
  }

  render() {
    const hrefParams = encodeURIComponent('transfer>receiveUser=gaohan111111&sendUser=gaohan123456');
    return (
      <div className="App">
        <div className="wrapper">
          <div className="eos-logo" alt="logo" />
          
          <span className="eos-title">升腾雨滴</span>

          <a href={`cceos://${hrefParams}`}>
            <div className="update-button update-ios">
              测试打开app
            </div>
          </a>

          <div onClick={this.onDevIOSStaingClickHandle} className="update-button update-ios">
            测试环境iOS下载
          </div>
          <div onClick={this.onDevAndroidStaingClickHandle} className="update-button update-android">
            测试环境Android下载
          </div>

          <div onClick={this.devIosPackage2} className="update-button update-ios">
            测试环境新版固件iOS下载
          </div>
          <div onClick={this.devAndroidPackage2} className="update-button update-android">
            测试环境新版固件Android下载
          </div>

          
          <div onClick={this.onTestIOSProductionClickHandle} className="update-button update-ios" style={{marginTop: '40px'}}>
            内部生产环境iOS下载
          </div>
          <div onClick={this.onTestAndroidProductionClickHandle} className="update-button update-android">
            内部生产环境Android下载
          </div>

          <div onClick={this.onProIOS} className="update-button update-ios" style={{marginTop: '40px'}}>
            生产环境iOS下载
          </div>
          <div onClick={this.onProAndroid} className="update-button update-android">
            生产环境Android下载
          </div>
         
          <div className="eos-img" alt="eos-img" />
        </div>
      </div>
    );
  }
}

export default App;
