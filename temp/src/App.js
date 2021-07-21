import React, { useState } from 'react';
import './App.css';

function App() {
  const [playing, setPlaying] = useState(false);

  const height = 500;
  const width = 500;

  const startVideo = () => {
    setPlaying(true)
    navigator.mediaDevices.getUserMedia(
      {
        video : true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__video")[0];
        if(video){
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () =>{
    setPlaying(false);
    let video = document.getElementsByClassName('app__video')[0];
    video.srcObject.getTracks()[0].stop();
  };

  return (
    <div className = "app">
      <div className = "app__container">
        <video 
          height = {height}
          width = {width}
          muted
          autoPlay
          className = "app__video"></video>
      </div>
      <div className = "app__input">
        {playing ? (
          <button onClick={stopVideo}>Stop</button>
        ): (
          <button onClick={startVideo}>Start</button>
        )}
      </div>
    </div>
  );
}
export default App;