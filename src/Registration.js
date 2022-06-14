import React,{useState,useContext} from 'react';
import './Registration.css';
import { FirebaseContext } from './store/FirebaseContext';
import { useNavigate } from "react-router-dom";

function Registration() {
 
   const [username,setUsername]=useState('')
   const [email,setEmail]=useState('')
   const [phone,setPhone]=useState('')
   const [password,setPassword]=useState('')
       
    const {firebase} = useContext(FirebaseContext)
    const navigate=useNavigate()

    const handleSubmitt=(e)=>{
      e.preventDefault();   

      firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          navigate('/login')
        })
      
      })
    })
    }
  
         return (  
          <div>
      <div className="signupParentDiv">
        
        <form onSubmit={handleSubmitt}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input" value={username} onChange={(e)=>setUsername(e.target.value)}
            type="text"
            id="fname"
            name="name"
           
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input" value={email} onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="fname"
            name="email"
    
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input" value={phone} onChange={(e)=>setPhone(e.target.value)}
            type="number"
            id="lname"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input" value={password} onChange={(e)=>setPassword(e.target.value)}
            type="password"
            id="lname"
    
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        </div>
        </div>
    );
        
}

export default Registration