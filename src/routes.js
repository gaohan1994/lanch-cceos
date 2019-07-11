import React from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import App from './App.js';
import Packet from './Packet.js';

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/imageserver/apk/build/index.html" component={App} />
        <Route exact path="/packet" component={Packet} />
        <Route exact path="/bonus/:token/:bonusno/:bonustoken" component={Packet} />
        <Route component={App} />
      </Switch>
    </BrowserRouter>
  );
}

export default MyRoute;