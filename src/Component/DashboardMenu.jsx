import React from "react";
import "../Styles/style.css";
import Img from "../asset/alan.jpg";
import  {tracks} from  "../data/tracks";
import { useState } from "react";
import { Truncate } from "../data/tracks";
// --------------------------------------------Left top section-------------------------------------------------------
export function MenuSide() {
  return (
    <div className="menusideHeader">
      <div className="playlist">
        <h3 className="active">
          <span></span>
          <i className="bi bi-music-note-beamed"></i>Music Hits
        </h3>
      </div>
    </div>
  );
}

// --------------------------------------------Left bottom section-------------------------------------------------------
export function MenuSongs() {
  const [songs, setSongs] = useState(tracks);

  console.log(songs)
  return (
    <div className="menu_song">
      <ol>
        {
          songs && songs.map((track)=>(
          <li className="songItem" key={track.id}>
          {/* <span>01</span> */}
          <img src={track.thumbnail} alt="cover art" />
          <h5>
            <div>
            {Truncate(track.title)}
              <div className="artist">{Truncate(track.author)}</div>
            </div>
            <i className="bi playlistPlay bi-play-circle" id="1"></i>
          </h5>
        </li>

          ))
        }
      </ol>
    </div>
  );
}

function DashboardMenu() {
  return (
    <div className="menu_side">
      <MenuSide />
      <MenuSongs />
    </div>
  );
}

export default DashboardMenu;
