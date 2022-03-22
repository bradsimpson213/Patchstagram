import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import { users, posts} from './data';

const App = () => {
  const [user, setUser] = useState(''); 
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing users={ users } setUser={ setUser } />
        </Route>
        <Route exact path="/feed">
          <Navbar user={ user } />
          <h1>Feed Page for { user }</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
