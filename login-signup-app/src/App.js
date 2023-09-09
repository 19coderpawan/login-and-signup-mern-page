import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './display/Home';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
         <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
        </div>
      </Router>
    </>
    
  );
}

export default App;
