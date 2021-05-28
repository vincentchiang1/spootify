import React from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import TopTracks from './TopTracks';
import Artists from './Artists';
import Recent from './Recent';
import usePersistedState from './usePersistedState';
import { Route, useRouteMatch, Switch } from 'react-router-dom';

export default function Home() {
  const [token, setToken] = usePersistedState();

  let match = useRouteMatch();
  return (
    <div className="home-page">
      <Sidebar />
      <Switch>
        <Route
          exact
          path={match.url + '/top-tracks'}
          render={() => <TopTracks token={token} />}
        />
        <Route
          exact
          path={match.url + '/artists'}
          render={() => <Artists token={token} />}
        />
        <Route
          exact
          path={match.url + '/recent'}
          render={() => <Recent token={token} />}
        />
      </Switch>
    </div>
  );
}
