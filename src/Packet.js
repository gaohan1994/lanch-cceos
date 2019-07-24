import React, { Component } from 'react';
import './App.css';

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

class Packet extends Component {

  componentDidMount () {
    console.log(this.props);
    this.getPacket();
  }

  getPacket = () => {
    if (isWeiXin() === false) {
      const { match: { params: { bonusno, bonustoken } } } = this.props;
      window.location.href = `cceos://type=bonus&bonusNo=${bonusno}&bonusToken=${bonustoken}`;
    } else {
      alert('请选择浏览器打开本页面跳转至升腾雨滴领取红包');
    }
  }

  render() {
    const { match: { params: { bonustoken } } } = this.props;
    return (
      <div className="App">
        <span onClick={this.getPacket} >
          去app领取红包
        </span>

        <span>如果无法唤醒app，在app领取红包页面输入红包口令{bonustoken}领取红包</span>
      </div>
    );
  }
}

export default Packet;
