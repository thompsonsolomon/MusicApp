import React from "react";
import "../Styles/HeroPage.css";
import { Link } from "react-router-dom";
import logoImg from "../asset/img.jpg"
function HeroPage() {
  return (
    <div className="heroImgCon">
      <div className="textCon">
          <div class="left-column">
            <p class="slogan">
              {" "}
              <b>MUSIC TO FILL YOUR HEART</b>
            </p>
            <p>
              music streams that you can listen to anytime and anywhere you
              want.
            </p>
            {/* <!-- <p>Are you an artist? Feel free to share your music with others too.</p> --> */}

            <Link to="./public/play.html">
              <button className="heroBtn">
                <span>PLAY</span>
                <div class="liquid"></div>
              </button>
            </Link>
        </div>
      </div>
      <div className="ImageCon">
        <div class="right-column">
          <img src={logoImg} alt="lady listening to music" />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
