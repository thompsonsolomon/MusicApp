import React from "react";
import "../Styles/style.css";
import Img from "../asset/alan.jpg";
import Img1 from "../asset/1.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Truncate } from "../data/tracks";
// --------------------------------------------Right section -------------------------------------------------------
function Songs() {
  const track = JSON.parse(localStorage.getItem("CurrentTrack"));
  const [currentTrack, setCurrentTrack] = useState(track)

  useEffect(() => {
    setCurrentTrack(track)
  }, [currentTrack]);

  console.log(currentTrack)
  return (
    <div className="song_side">
      <nav>
        <ul>
          <li className="active">
            <Link to="/"> Discover </Link>
          </li>
          <li id="uploadLink" className="">
            {/* <Link to="/">Follow Splash</Link> */}
          </li>
        </ul>

        <div className="search">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search music..." />
        </div>

        <div className="user">
          <span id="userID" className="">
            Alan W
          </span>
        </div>
      </nav>

      <section className="SongSideContainer">
        {/* <!-- top section (Music Info)--> */}
        <div className="content">
          <div className="contentBanner">
            <h1 id="songTitle"> {Truncate(currentTrack.title)}</h1>
            <p id="artistTitle">{currentTrack.author}</p>
            <div className="buttons">
              <button id="playBanner">PLAY</button>
            </div>
          </div>
          <div className="coverArt">
            <img
              src={currentTrack.thumbnail}
              alt="CoverArt"
              id="coverArtBanner"
            />
          </div>
        </div>

        {/* <!-- recommended section --> */}
        <div className="popular_song hidden">
          <div className="h4">
            <p>Recommended</p>
            <div className="btn_s">
              <i id="left_scroll" className="bi bi bi-caret-left"></i>
              <i id="right_scroll" className="bi bi bi-caret-right"></i>
            </div>
          </div>

          <div className="pop_song" id="hit">
            <li className="songItem">
              <div className="img_play">
                <img src={Img} alt="On my way" />
                <i className="bi playListPlay bi-play-circle-fill" id="7"></i>
              </div>
              <h5>
                On My Way
                <br />
                <div className="subtitle">Alan Walker</div>
              </h5>
            </li>

            <li className="songItem">
              <div className="img_play">
                <img src={Img} alt="On my way" />
                <i className="bi playListPlay bi-play-circle-fill" id="7"></i>
              </div>
              <h5>
                On My Way
                <br />
                <div className="subtitle">Alan Walker</div>
              </h5>
            </li>

            <li className="songItem">
              <div className="img_play">
                <img src={Img} alt="On my way" />
                <i className="bi playListPlay bi-play-circle-fill" id="7"></i>
              </div>
              <h5>
                On My Way
                <br />
                <div className="subtitle">Alan Walker</div>
              </h5>
            </li>
          </div>
        </div>
        {/* <!-- Categories section --> */}

        <div className="popular_artists hidden">
          <div className="h4">
            <p>Recommended Artists</p>
            <div className="btn_s">
              <i id="left_scrolls" className="bi bi-caret-left"></i>
              <i id="right_scrolls" className="bi bi-caret-right"></i>
            </div>
          </div>
          <div className="item">
            <li>
              <img src={Img} alt="Alan Walker" title="Alan Walker" />
            </li>
            <li>
              <img src={Img} alt="Alan Walker" title="Alan Walker" />
            </li>
            <li>
              <img src={Img} alt="Alan Walker" title="Alan Walker" />
            </li>
            <li>
              <img src={Img} alt="Alan Walker" title="Alan Walker" />
            </li>
            <li>
              <img src={Img} alt="Alan Walker" title="Alan Walker" />
            </li>
          </div>
        </div>

        {/* <!-- Categories section --> */}

        {/* <div className="category">
          <ul>
            <li
              id="discover"
              style={{
                fontFize: "30px",
                fontWeight: "200",
                paddingButtom: "40px",
              }}
            >
              Discover Great Music
            </li>
            <ul>
              <li id="genreOption" style={{ height: "50px", padding: "10px" }}>
                Genre
              </li>
              <li
                id="genreOptions1"
                className="hidden"
                style={{ height: "30px", padding: "0px" }}
              >
                <button className="selectGenre">Afro-Beats</button>
                <button className="selectGenre">Afro-soul</button>
                <button className="selectGenre">Amapiano</button>
                <button className="selectGenre">Bongo</button>
                <button className="selectGenre">Country</button>
                <button className="selectGenre">Drill</button>
                <button className="selectGenre">Gengetone</button>
                <button className="selectGenre">Gospel</button>
              </li>
              <li
                id="genreOptions2"
                className="hidden"
                style={{ height: "30px", padding: "0px" }}
              >
                <button className="selectGenre">Hip-Hop</button>
                <button className="selectGenre">House</button>
                <button className="selectGenre">Pop</button>
                <button className="selectGenre">Reggae</button>
                <button className="selectGenre">RnB</button>
                <button className="selectGenre">Soft-Rock</button>
                <button className="selectGenre">Soul</button>
                <button className="selectGenre">Play All Genres</button>
              </li>
            </ul>
          </ul>
        </div> */}
        {/* <div className="songList">
          <ul id="songList">
            <h1>hello world </h1>
          </ul>
        </div> */}
      </section>
    </div>
  );
}

export default Songs;
