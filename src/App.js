import logo from './logo.svg';
import './App.css';

import Home from './include/Home.js';
import SignUp from './include/SignUp';
import SignIn from './include/SignIn';
import Dashboard from './include/Dashboard';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useEffect } from "react"
import { db } from "./database/db.config.ts" 
import {initialData, initialTodo} from "./database/initialData.ts"


function App() {
  useEffect(() => {
    db.open().then(() => {
      db.table('users').count((count) => {
        if (count === 0) {
          db.table('users').bulkAdd(initialData);
        }
      });
      db.table('tasks').count((count) => {
        if (count === 0) {
          db.table('tasks').bulkAdd(initialTodo);
        }
      });
    });
  }, [])
  return (
    <Router>
      <div className='app'> 
      <Routes>
        <Route path='/*' element={<Home/>}></Route>
        <Route path='SignUp' element={<SignUp/>}></Route>
        <Route path='SignIn' element={<SignIn/>}></Route>
        <Route path='Dashboard' element={<Dashboard/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;