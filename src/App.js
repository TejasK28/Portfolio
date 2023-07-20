import './App.css';
import PreLoader from './component/PreLoader';
import HomePage from "./component/HomePage";
import React, { useState, useEffect } from 'react';

function App() {


  return (

    <>

    
    {/*PreLoader component*/}
        {/*Does the preloader animation*/}
    <PreLoader />

    {/*HomePage component*/}
      {/*Displays website*/}
      <HomePage />


    </>
  );
}

export default App;