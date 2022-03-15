import { Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';


const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
