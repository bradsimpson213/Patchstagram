import { Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/feed">
          <Navbar />
          <h1>Feed Page</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
