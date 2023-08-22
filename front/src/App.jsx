import React, { useContext, useEffect, useState } from 'react';
import UserProfile from './pages/UserProfile';
import Admin from './Admin';
import User from './User';
import Guest from './Guest';
import { GlobalContext } from './usercontext/context';
import axios from 'axios';
import { decodeToken } from 'react-jwt'


export const AppRoute = '/'
const ComponentByRoles = {
  'admin': Admin,
  'user': User,
  'guest': Guest
}

const getUserRole = (params) => ComponentByRoles[params] || ComponentByRoles['guest'];
const getDecodeToken = (token) => decodeToken(token) || null
function App() {
  const { state, dispatch } = useContext(GlobalContext);
  const currentToken = getDecodeToken(state.token)
  console.log(currentToken)
  const CurrentUser = getUserRole('user');


  useEffect(()=>{

    axios.get('http://localhost:1234/api/allusers')
    .then(json => console.log(json.data))
    .catch(err => console.log(err))
  }, [])
 {

  return <CurrentUser />
}
    
}

export default App;