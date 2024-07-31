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
    <Route path='/' element=<App></App>>
    <Route path='dashboard' element=<Dashboard></Dashboard>></Route>
    <Route path='workshop' element= <Flow />></Route>
    </Route>
  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider  store={ store}>
 <RouterProvider router={router}></RouterProvider>
   </Provider>
 
  </React.StrictMode>
);


