import React,{useContext} from 'react';
import './Login.css';
import {Authcontext, FirebaseContext } from './store/FirebaseContext';
import { useNavigate } from "react-router-dom";



function Header() 
{

const{user}=useContext(Authcontext)
const{firebase}=useContext(FirebaseContext)
const navigate=useNavigate()
return(
<div>
<span> {user ? `welcome ${user.displayName}`:'login'}</span>
{user && <span onClick={()=>{firebase.auth().signOut();
navigate('/Registration')} }>logout</span>}

    </div>
    )
  
}
export default Header