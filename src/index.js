import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
// import { getFirestore } from 'firebase/firestore';

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import 'firebase/firestore';


var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL:process.env.databaseURL,
    projectId: "projectId",
    storageBucket: "ipod-eeef5.appspot.com",
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
      // measurementId: "G-RMZGQ4ZMF8"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />,document.getElementById('root'));
serviceWorker.unregister();
