import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App.js';

//----------------------------------------------
//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAuiv0s035vO_V8YgRDqmVtsc5XruVMGn0",
    authDomain: "wad200-2203.firebaseapp.com",
    projectId: "wad200-2203",
    storageBucket: "wad200-2203.appspot.com",
    messagingSenderId: "1085724902030",
    appId: "1:1085724902030:web:fca96538b43d96d8c1ffdf",
    measurementId: "G-DXPCLVMYED"
  };

firebase.initializeApp(firebaseConfig);
//----------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
  <App />
</BrowserRouter>
  
);

