import React,{useState,useContext} from 'react';
import './Login.css';
import { FirebaseContext } from './store/FirebaseContext';
import { useNavigate } from "react-router-dom";
import Header from './Header';



function Login() {

  const navigate=useNavigate()
  const{firebase}=useContext(FirebaseContext)
//  const {user}=useContext(Authcontext)


  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 

  const handleLogin=()=>{
    firebase.auth().signinWithEmailAndPassword(email,password).then(()=>{
      navigate('/')

    }).catch((error)=>{
      alert(error.message)
    })

  }
  return (
    <div>
 <Header/>
    <div className='loginParentDiv'>

    <form onSubmit={handleLogin}>
    <label htmlFor="fname">Email</label>
    <br />
    <input
      className="input"
      type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
      id="fname"
      name="email"
      defaultValue="John"
    />
    <br />
    <label htmlFor="lname">Password</label>
    <br />
    <input
      className="input"
      type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
      id="lname"
      name="password"
      defaultValue="Doe"
    />
    <br />
    <br />
    <button>Login</button>
  </form>
  </div>                          

    </div>
  )
}

export default Login