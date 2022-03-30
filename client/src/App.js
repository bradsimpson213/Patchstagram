import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import { get_all_users } from './store/userReducer';
import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Feed from "./components/Feed";
import Footer from './components/Footer';
import PostForm from './components/PostForm';
import { users, posts} from './data';


const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(users ? users[0].fullName : '');
  
  useEffect(() => {
    (async () => {
      await dispatch(get_all_users());
    })();
  }, [dispatch]);
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Landing setUser={ setUser }  />
          <Footer />
        </Route>
        <Route path="/feed">
          <Navbar />
          <Feed user={ user } posts= { posts }/>
        </Route>
        <Route path="/newpost">
          <Navbar />
          <PostForm user={ user } users={ users } posts= { posts }/>
        </Route>s
      </Switch>
      
    </div>
  );
}

export default App;
