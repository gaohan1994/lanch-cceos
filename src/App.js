import React, { Component } from 'react';
import './App.css';
// import logo from './img/logo.png';
// import eosimg from './img/img_jifen.png';

const production = process.env.NODE_ENV === 'production' ? true : false;

class App extends Component {


  onDevIOSStaingClickHandle = () => {
    window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/app/05301621/cceos.plist';
  }

  onDevAndroidStaingClickHandle = () => {
    window.location.href = 'https://net.huanmusic.com/eos/app/05311014/app-release.apk';
  }

  onTestIOSProductionClickHandle = () => {
    window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/app/07050934/cceos.plist';
  }

  onTestAndroidProductionClickHandle = () => {
    window.location.href = 'https://net.huanmusic.com/eos/app/07241058/app-releaseTest.apk';
  }

  devIosPackage2 = () => {
    window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/app/06121650/cceos.plist';
  }
  devAndroidPackage2 = () => {
    window.location.href = 'https://net.huanmusic.com/cceos/app/08211349/app-releaseStaging.apk';
  }

  openUrl = () => {

  }

  onProIOS = () => {
    window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/app/08161224/cceos.plist';
  }

  onProAndroid = () => {
    window.location.href = 'https://net.huanmusic.com/eos/app/08161224/app-release.apk';
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="eos-logo" alt="logo" />
          <span className="eos-title">升腾雨滴</span>
          {
            production === true ? (
              <div>
                <div onClick={this.onProIOS} className="eos-button eos-ios" />
                <div onClick={this.onProAndroid} className="eos-button eos-android" />
              </div> 
            ) : (
              <div>
                <div onClick={this.devIosPackage2} className="update-button update-ios">
                  测试环境iOS下载
                </div>
                <div onClick={this.devAndroidPackage2} className="update-button update-android">
                  测试环境Android下载
                </div>

                
                <div onClick={this.onTestIOSProductionClickHandle} className="update-button update-ios" style={{marginTop: '40px'}}>
                  内部生产环境iOS下载
                </div>
                <div onClick={this.onTestAndroidProductionClickHandle} className="update-button update-android">
                  内部生产环境Android下载
                </div>
              </div> 
            )
          }
          {/* <a href={`cceos://${hrefParams}`}>
            <div className="update-button update-ios">
              测试打开app
            </div>
          </a> */}
          <div className="eos-img" alt="eos-img" />
        </div>
      </div>
    );
  }
}

export default App;
