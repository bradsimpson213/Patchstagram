import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Feed from "./components/Feed";
import { users, posts} from './data';

const App = () => {
  const [user, setUser] = useState(users ? users[0].fullName : ''); 
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing users={ users } setUser={ setUser } />
        </Route>
        <Route exact path="/feed">
          <Navbar user={ user } />
          <Feed user={ user } posts={ posts } />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
