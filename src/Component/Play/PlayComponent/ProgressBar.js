// const ProgressBar = ({
//   progressBarRef,
//   audioRef,
//   timeProgress,
//   duration,
// }) => {
//   const handleProgressChange = () => {
//     audioRef.current.currentTime = progressBarRef.current.value;
//   };

//   const formatTime = (time) => {
//     if (time && !isNaN(time)) {
//       const minutes = Math.floor(time / 60);
//       const formatMinutes =
//         minutes < 10 ? `0${minutes}` : `${minutes}`;
//       const seconds = Math.floor(time % 60);
//       const formatSeconds =
//         seconds < 10 ? `0${seconds}` : `${seconds}`;
//       return `${formatMinutes}:${formatSeconds}`;
//     }
//     return '00:00';
//   };

//   return (
//     <div className="progress">
//       <span className="time current">{formatTime(timeProgress)}</span>
//       <input
//         type="range"
//         ref={progressBarRef}
//         defaultValue="0"
//         onChange={handleProgressChange}
//       />
//       <span className="time">{formatTime(duration)}</span>
//     </div>
//   );
// };

// export default ProgressBar;

      {/* <div className="controls-wrapper">
        <div className="controls">
          <button onClick={handlePrevious}>
            <i>{"<"}</i>
          </button>
          <button onClick={skipBackward}>
            <i>{"<"}</i>
          </button>

          <button onClick={togglePlayPause}>
            {isPlaying ? <i>{"|>"}</i> : <i>{"||"}</i>}
          </button>
          <button onClick={skipForward}>
            <i>{">"}</i>
          </button>
          <button onClick={handleNext}>
            <i>{">"}</i>
          </button>
        </div>
        <div className="volume">
          <button onClick={() => setMuteVolume((prev) => !prev)}>
            {muteVolume || volume < 5 ? (
              <i>{"O"}</i>
            ) : // <IoMdVolumeOff />
            volume < 40 ? (
              // <IoMdVolumeLow />
              <i>{"L"}</i>
            ) : (
              <i>{"H"}</i>
              // <IoMdVolumeHigh />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            id="currentMusic"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            style={{
              background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
            }}
          />
        </div>
      </div> */}


















      
// import React from "react";
// import Img from "../../asset/1.jpg";
// import __music from "../../data/1.mp3";
// import {useEffect, useRef, useState } from "react";

// function Play() {
//   let music = __music;
//   const audioRef = useRef();
//   console.log(audioRef);
//   let masterPlay = document.getElementById("masterPlay");
//   let wave = document.getElementsByClassName("wave")[0];
//   const [isPlaying, setIsplaying] = useState(false);
//   // masterPlay.addEventListener('click', ()=>{
//   //   playMusic();
//   // })

//   //play music funtionality

//   const togglePlayPause = () => {
//     setIsplaying((prev) => !prev);
//   };

//   useEffect(() => {
//     if (isPlaying) {
//       audioRef.current.play();
//     } else {
//       audioRef.current.pause();
//     }
//   }, [isPlaying, audioRef]);
//   const playMusic = function () {
//     if (music.paused || music.currentTime <= 0) {
//       music.play();
//       masterPlay.classList.remove("bi-play-circle");
//       masterPlay.classList.add("bi-pause-circle");
//       wave.classList.add("active2");
//       document.getElementById("playBanner").innerHTML = "PAUSE";
//     } else {
//       music.pause();
//       masterPlay.classList.add("bi-play-circle");
//       masterPlay.classList.remove("bi-pause-circle");
//       wave.classList.remove("active2");
//       document.getElementById("playBanner").innerHTML = "PLAY";
//     }
//   };

//   return (
    //  );
// }

// export default Play;

// //progress bar
// // let currentStart = document.getElementById('currentStart');
// // let currentEnd = document.getElementById('currentEnd');
// // let seek = document.getElementById('seek');
// // let bar2 = document.getElementById('bar2');
// // let dot = document.getElementsByClassName('dot')[0];

// // music.addEventListener('timeupdate', ()=>{
// //   let curTime = music.currentTime;
// //   let songDuration = music.duration;

// //   let min = Math.floor(songDuration / 60);
// //   let sec = Math.floor(songDuration % 60);
// //   currentEnd.innerHTML = `${min}:${sec}`;

// //   let curMin = Math.floor(curTime / 60);
// //   let cuSec = Math.floor(curTime % 60);
// //   currentStart.innerText = `${curMin}:${cuSec}`;

// //   if (music.duration >= 0){
// //     var progressbar = parseInt((music.currentTime/music.duration)*100);
// //     seek.value = progressbar;
// //     let seekbar = seek.value;
// //     bar2.style.width = `${seekbar}%`;
// //     dot.style.left = `${seekbar}%`;
// //   } else {
// //     var progressbar = 0;
// // }
// // })

// // seek.addEventListener('change', ()=>{
// //   music.currentTime = seek.value * music.duration/100;
// // })

// // music.addEventListener('ended', ()=>{
// //   masterPlay.classList.add('bi-play-circle');
// //   masterPlay.classList.remove('bi-pause-circle');
// //   wave.classList.remove('active2');
// // })

// // //Volume functionality
// // let vol_icon = document.getElementById('vol_icon');
// // let volume = document.getElementById('volume');
// // let vol_dot = document.getElementById('vol_dot');
// // let vol_bar = document.getElementsByClassName('vol_bar')[0];

// // volume.addEventListener('change',()=>{
// //   if (volume.value==0){
// //     vol_icon.classList.remove('bi-volume-down');
// //     vol_icon.classList.add('bi-volume-mute');
// //     vol_icon.classList.remove('bi-volume-up');
// //   }
// //   if (volume.value > 0){
// //     vol_icon.classList.add('bi-volume-down');
// //     vol_icon.classList.remove('bi-volume-mute');
// //     vol_icon.classList.remove('bi-volume-up');
// //   }
// //   if (volume.value > 50){
// //     vol_icon.classList.remove('bi-volume-down');
// //     vol_icon.classList.remove('bi-volume-mute');
// //     vol_icon.classList.add('bi-volume-up');
// //   }

// //   let vol_a = volume.value;
// //   vol_bar.style.width = `${vol_a}%`;
// //   vol_dot.style.left = `${vol_a}%`;
// //   music.volume = vol_a/100;
// // })

// //Next music
// // let next = document.getElementById('next');
// // let back = document.getElementById('back');

// // back.addEventListener('click', () =>{
// //   index -= 1;
// //   if (index < 1){

// //   }
// // })

// // let left_scroll = document.getElementById('left_scroll');
// // let right_scroll = document.getElementById('right_scroll');
// // let hit = document.getElementById('hit');

// // left_scroll.addEventListener('click', () =>{
// //   hit.scrollleft -= 330;
// // })
// // right_scroll.addEventListener('click', () =>{
// //   hit.scrollleft += 330;
// // })
