
import React from 'react'
import './App.css';
import Registration from './Registration';
import Login from './Login';
import {useContext,useEffect}from 'react';
import { Authcontext, FirebaseContext } from './store/FirebaseContext';



function App() {


  const {firebase}=useContext(FirebaseContext)
 const {setUser}=useContext(Authcontext)

 useEffect(()=>{
   firebase.auth().onAuthStateChanged((user)=>{
     setUser(user)
   })

 })
  return (
 
 
    <div className="App">

    <Registration/>      
    <Login/>
 
    </div>

  
  );
}

export default App;
