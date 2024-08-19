import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import {configureStore, applyMiddleware} from "@reduxjs/toolkit"
 import nodeReducer from "./reactflow/nodereducer/nodeSlice"
 import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import Flow from './reactflow/flow';
import Dashboard from './dashboard/dashboard';
import Homepage from './homepage/components/homepage';
import {ClerkProvider} from "@clerk/clerk-react"

import Signup from './signup';

const store = configureStore({
reducer:{
  nodes:nodeReducer
},
middleware:(getdefaultMiddleware)=>getdefaultMiddleware({
 serializableCheck:false
})
})

const router  =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element=<App />>
    <Route path='/' element=<Homepage />></Route>
    
    <Route path='dashboard' element=<Dashboard></Dashboard>></Route>
    <Route path='workshop' element= <Flow />></Route>
    <Route path='signup' element= <Signup  />></Route>
    </Route>

  )
)

const PUBLISHABLE_KEY = "pk_test_d2lzZS1qYXktNDYuY2xlcmsuYWNjb3VudHMuZGV2JA"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
   <Provider  store={ store}>
 <RouterProvider router={router}></RouterProvider>
   </Provider>
   </ClerkProvider>
 
  </React.StrictMode>
);


