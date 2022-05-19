import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import FrontPage from './Components/FrontPage/FrontPage'
import './App.css'
import axios from 'axios';
import getUsers from './api/users';
import getRosters from './api/league'
import getTrades from './api/trades';



const App = () => {
  const [users, setUsers] = useState([])
  const [rosters, setRosters] = useState([])

  useEffect(() => {
    (async () => {
      let x = await getUsers()
      let y = await getRosters()
      setUsers(x)
      setRosters(y)
    })()
  }, [])

  useEffect(() => {
    if (users.length === 0) return
    users.forEach((user, index) =>{
      console.log(user, rosters['owner_id'])
    })
  }, [users]) 

  return (
    <div className='App'>
      <Navbar />
      <FrontPage />
    </div>
  );
}

export default App;
