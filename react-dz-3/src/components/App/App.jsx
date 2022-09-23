import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Users from '../Users/Users';
import User from '../User/User'


import './App.css';
import Posts from '../Posts/Posts';

function App () {
  return (
   <Routes>
      <Route path='/'>
        <Route index element={<Users/>}/>
        <Route path='users/:id' element={<User/>}/>
        <Route path='posts/:userId' element={<Posts/>}/>
      </Route>
   </Routes>
  );
}

export default App
