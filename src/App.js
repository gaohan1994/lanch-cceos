import React, { Component } from 'react';
import './App.css';

export function isAndroid () {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
  
  return isAndroid;
}

export function isWeiXin () {
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  let ua = window.navigator.userAgent.toLowerCase();
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  // eslint-disable-next-line
  if (ua.match(/MicroMessenger/i) == "micromessenger"){
    return true;
  } else {
    return false;
  }
}

class App extends Component {

  componentDidMount() {
    // window.location.reload();
    const weixinToken = isWeiXin();
    console.log('weixinToken: ', weixinToken);
    const androidToken = isAndroid();
    console.log('androidToken: ', androidToken);
    
    if (weixinToken === true) {
      /**
       * [是微信，判断是否是安卓如果是安卓则提醒用户浏览器打开]
       */

      // if (androidToken === true) {
      //   /**
      //    * [微信&&安卓则提醒用户去浏览器]
      //    */
      //   alert('安卓用户下载雨滴App请使用浏览器打开本页面！');
      // }
      alert('请使用浏览器打开本页面下载雨滴App');
    }
  }

  onIOSClickHandle = () => {
    // window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/production/06061647/cceos.plist';
    const weixinToken = isWeiXin();
    if (weixinToken === true) {
      alert('请使用浏览器打开本页面下载雨滴App!')
    } else {
      window.location.href = 'itms-services:///?action=download-manifest&url=https://net.huanmusic.com/eos/app/09121736/cceos.plist';
    }
  }

  onAndroidClickHandle = () => {
    const weixinToken = isWeiXin();
    const androidToken = isAndroid();

    if (weixinToken === true && androidToken && true) {
      /**
       * [按桌且是微信]
       */
      alert('安卓用户下载雨滴App请使用浏览器打开本页面！');
    } else {
      // window.location.href = 'https://net.huanmusic.com/eos/production/06061647/app-release.apk';
      window.location.href = 'https://net.huanmusic.com/eos/app/09121736/app-release.apk';
    }
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
