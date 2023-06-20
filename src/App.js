import { useState } from 'react';
import './App.css';
import Landingpage from './Landingpage';
import Admin from './Admin';
import User from './User';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showUser, setShowUser] = useState(false);
  return (
    showAdmin ? < Admin /> : (showUser ? < User /> : <Landingpage funShowUser = {setShowUser} funShowAdmin = {setShowAdmin} /> )
  );
}

export default App;
