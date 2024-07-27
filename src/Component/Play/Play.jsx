import { useRef, useState } from "react";
import { tracks } from "../../data/tracks";

// import components
import DisplayTrack from "./PlayComponent/DisplayTrack";
import Controls from "./PlayComponent/Controls";
import ProgressBar from "./PlayComponent/ProgressBar";
import { useEffect } from "react";
// import TopBar from './TopBar';

const Play = () => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // reference
  const audioRef = useRef();
  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  useEffect(() => {
    localStorage.setItem("CurrentTrack", JSON.stringify(currentTrack));
  }, [currentTrack, trackIndex, timeProgress, duration]);


  return (
    <>
      <div className="audio-player">
        <div className="inner">
          <DisplayTrack
            {...{
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
            }}
          />
          <Controls
            {...{
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
            }}
          />
        </div>
      </div>
    </>
  );
};
export default Play;
