import React from "react";
import "../css/home.css";

// Images
import background_filled_colour from '../img/score_background_430x70_without_fade.png';
import burn_emoji_animated from '../img/burn_emoji_animated.gif';
import PFP from '../img/PFP.gif';
import flame_emoji from "../img/flame_emoji.png"
import tg_background from '../img/tg_background.png';
import gift_emoji_animated from '../img/gift_emoji_animated.gif';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="score-stats">
            <img src={background_filled_colour} alt="background_filled_colour" className="score-background" />
            <div className="score-stats-box">
              <img src={burn_emoji_animated} alt="burn" className="burn-emoji-score" />
              <div className="score-stats-text">Your Score</div>
            </div>
          </div>

          <div className="profile">
            <img src={PFP} alt="PFP" className="profile-pic" />
            <div className="username">{this.props.username}</div>
            <div className="score">
              <img src={flame_emoji} alt="burn" className="flame-logo-score" />
              <span className="score-count">5739</span>
            </div>
          </div>

          <div className="chests">
            <img src={tg_background} alt="chests" className="chests-background" />
            <div className="in-chests">
              <span className="gifts-header">Gifts</span>
              <img src={gift_emoji_animated} alt="gift" className="chest" />
              <span className="open-gift">Open</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
