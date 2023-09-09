import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
