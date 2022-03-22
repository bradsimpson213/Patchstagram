import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Feed from "./components/Feed";
import Footer from './components/Footer';
import { users, posts} from './data';


const App = () => {
  const [user, setUser] = useState(users ? users[0].fullName : ''); 
  return (
    <div className="App">
      <h1>This is my Instagram Clone</h1>
      <h2>Its sort of sad... 😢</h2>
    </div>
  );
}

export default App;
