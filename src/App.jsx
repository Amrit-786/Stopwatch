import { useEffect, useState } from "react";
import './App.css';


function Stopwatch (){
  const [time,setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    let intervalId;
    if(isRunning){
      intervalId = setInterval(()=> setTime(time+1), 10);
    }
    return ()=> clearInterval(intervalId);
  },[isRunning,time]);

   //hour calculation
   const hours = Math.floor(time/360000);

  //minutes calculation
  const minutes = Math.floor((time % 360000)/6000);

  //second calculation
  const seconds = Math.floor((time%6000)/100);

  //milliseconds calculation
  const milliseconds = time%100;

  const startAndStop=()=>{
    setIsRunning(!isRunning);
  };

  const reset=()=>{
    setTime(0);
  }

  return(
    <div className="container">
    <p className="stopwatch-time">
      {hours}:{minutes.toString().padStart(2,"0")}:
      {seconds.toString().padStart(2,"0")}:
      {milliseconds.toString().padStart(2,"0")}
    </p>
    <div className="stopwatch-buttons">
      <button onClick={startAndStop}>{isRunning ? "Stop" : "Start"}</button>
      <button  className = "reset-button"  onClick={reset}>Reset</button>
    </div>
  </div>

  )
  
}

export default Stopwatch;