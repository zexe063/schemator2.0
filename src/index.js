import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {configureStore, applyMiddleware} from "@reduxjs/toolkit"

import nodeReducer from "./nodereducer/nodeSlice"

const store = configureStore({
reducer:{
  nodes:nodeReducer
},
middleware:(getdefaultMiddleware)=>getdefaultMiddleware({
 serializableCheck:false
})
})

// console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider  store={ store}>
   <App />
   </Provider>
 
  </React.StrictMode>
);


