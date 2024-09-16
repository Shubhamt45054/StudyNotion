import './App.css';
import {useState} from "react"
import Navbar from "./components/Navbar" 
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/SIgnup'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute';

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);


  return (
    <div className="App h-full flex flex-col bg-slate-900">
     <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

     <Routes >
     <Route path="/" element={<Home   isLoggedIn={isLoggedIn}/>}/>
     <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn}/>} />
     <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}  />
     <Route path="/dashboard" element={
      <PrivateRoute isLoggedIn={isLoggedIn} dashboard={<Dashboard/>}>
        
      </PrivateRoute>
     
     } />


     </Routes>
    </div>
  );
}

export default App;
