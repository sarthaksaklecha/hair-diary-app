import React, { useEffect } from "react";
import './App.css';
import { useDispatch } from "react-redux";

// Components
import Header from './Components/Header/Header';
import Calendar from "./Components/Calendar/Calendar";
import data from "./API";


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    data(dispatch)
  },[dispatch])
  
  return (
    <div className="App">
      <Header />
      <Calendar />
    </div>
  );
}

export default App;
