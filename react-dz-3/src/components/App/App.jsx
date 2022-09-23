import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Users from '../Users/Users';


import './App.css';
import Posts from '../Posts/Posts';

function App () {
  return (
   <Routes>
      <Route path='/'>
        <Route index element={<Users/>}/>
        <Route path='posts/:userId' element={<Posts/>}/>
      </Route>
   </Routes>
  );
}

export default App
