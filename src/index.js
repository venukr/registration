import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {FirebaseContext} from './store/FirebaseContext';
import firebase from './firebase/config';
import {createRoot} from 'react-dom/client';
import Context from './store/FirebaseContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
  <FirebaseContext.Provider value={{firebase}}>    
  <Context>
      <App/>  
      </Context>   
  </FirebaseContext.Provider>
  </Router>
);

