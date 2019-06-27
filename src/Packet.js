import React, { Component } from 'react';
import './App.css';
// import { LaunchApp, supportLink, inWexin, inWeibo } from 'web-launch-app';

// const lanchInstance = new LaunchApp({
//   deeplink: {
//     scheme: {
//       android: {
//         protocol: 'cceos',
//         index: {
//           // path: 'tieba.baidu.com',
//           param: { from:'h5' },
//         }
//       },
//       ios: {
//         protocol: 'cceos',
//         index: {
//           param: { from: 'h5' }
//         }
//       }
//     },
//     link: {
//         index: { url: 'ccoes://' },
//         // frs: { url: 'ccoes://' }
//     },
//     // yyb: {
//     //     url: 'http://a.app.qq.com/o/simple.jsp',
//     //     param: {
//     //         pkgname: 'com.baidu.tieba'
//     //     }
//     // },
//   },
//   pkgs: {
//     android: 'http://cceos.51cpay.cn:18080/imageserver/apk/build/index.html',
//     ios: 'http://cceos.51cpay.cn:18080/imageserver/apk/build/index.html',
//   },
//   useUniversalLink: supportLink,
//   useAppLink: supportLink,
//   autodemotion: true,
//   useYingyongbao: inWexin,
//   useGuideMethod: inWeibo,
//   // landPage: 'http://tieba.baidu.com/mo/q/activityDiversion/download'
// });

class Packet extends Component {

  constructor (props) {
    super(props);
    this.init();
  }

  init = () => {
    
  }

  componentDidMount() {
    const hrefParams = encodeURIComponent('transfer>receiveUser=gaohan111111&sendUser=gaohan123456');
    // lanchInstance.open({
    //   launchType: {
    //     ios: 'scheme',
    //     android: 'scheme'
    //   },
    //   scheme: 'cceos://',
    //   param: {
    //     context:'copycontent'
    //   },
    //   timeout: -1
    // });
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
