
// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGbHGC7yedqn8j-12gglRRvQ80zgjGKg0",
  authDomain: "ecommerceboomerang-ab7ef.firebaseapp.com",
  projectId: "ecommerceboomerang-ab7ef",
  storageBucket: "ecommerceboomerang-ab7ef.appspot.com",
  messagingSenderId: "568929583105",
  appId: "1:568929583105:web:b4a3045f2f50717fd58000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth

export {auth};