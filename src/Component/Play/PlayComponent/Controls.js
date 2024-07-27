import { useState, useEffect, useRef, useCallback } from "react";
import "../../../Styles/ProgressBar.css"
const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
  currentTrack,
  timeProgress,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();
  const currentTime2 = 0;
  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
  };

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <div className="master_play">
      <div className={`wave ${isPlaying ? "active2" : "wave"}`}>
        <div className="wave1"></div>
        <div className="wave1"></div>
        <div className="wave1"></div>
        <div className="wave1"></div>
      </div>
      <div className="image">
        <img
          src={currentTrack.thumbnail}
          alt="masterPlayArt"
          id="masterPlayArt"
        />
      </div>

      <h5>
        <span id="masterPlayTitle">{currentTrack.title}</span>
        <div className="artist" id="masterPlayArtist">
          {currentTrack.author}
        </div>
      </h5>

      <div className="icon">
        <button className="Controlbtn" onClick={handlePrevious}>
          <i
            className="bi bi-skip-start"
            id="back"
            onClick={handlePrevious}
          ></i>
        </button>
        <button onClick={togglePlayPause} className="Controlbtn">
          <i
            onClick={togglePlayPause}
            className={`bi bi-${isPlaying ? "pause" : "play"}-circle  middle`}
            id="masterPlay"
          ></i>
        </button>
        <button className="Controlbtn" onClick={handleNext}>
          <i className="bi bi-skip-end" onClick={handleNext}></i>
        </button>
      </div>
      <span id="currentStart">{formatTime(timeProgress)}</span>
      <div className="bar">
        <input
          type="range"
          max="100"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
        />
        {/* <div className="bar2" id="bar2"></div>
        <div className="dot"></div> */}
      </div>
      <span id="currentEnd">{formatTime(duration)}</span>

      <div className="vol">
        <i
          className="bi bi-volume-down"
          onClick={() => setMuteVolume((prev) => !prev)}
          id="vol_icon"
        ></i>
        <input
          type="range"
          max="100"
          id="currentMusic"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
        <div className="vol_bar" style={{ width: volume }}></div>
        <div className="dot" id="vol_dot" style={{ left: volume }}></div>
      </div>
    </div>
  );
};

export default Controls;
