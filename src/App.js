import './App.css';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Home from './Home';

const LoginContainer = () => (
  <div className="container">
    <Route path="/" render={() => <Redirect to="/login" />} />
    <Route path="/login" component={Login} />
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/(login)" component={LoginContainer} />
        <Route path="/home" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
