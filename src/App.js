import './App.css';
import Login from './Login';
import {Route, Switch } from "react-router-dom"
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
    </Switch>
    </div>
  );
}

export default App;
