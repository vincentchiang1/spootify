import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopTracks from './TopTracks';
import Artists from './Artists';
import Recent from './Recent';
import Home from './Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          //Layout and sidebar can now receive props
          <Home {...props}>
            <Switch>
              <Route path="/page-1" component={TopTracks} />
              <Route path="/page-2" component={Artists} />
              <Route path="/page-3" component={Recent} />
            </Switch>
          </Home>
        )}
      />
    </BrowserRouter>
  );
}
