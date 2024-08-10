import React from "react";
import "../css/home.css";

// Images
import background_filled_colour from '../img/home/score_background_430x70_without_fade.webp';
import burn_emoji_animated from '../img/burn_emoji_animated.gif';
import PFP from '../img/home/PFP.gif';
import flame_emoji from "../img/flame_emoji.webp"
import tg_background from '../img/home/tg_background.webp';
import gift_emoji_animated from '../img/home/gift_emoji_animated.gif';

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

          <div className="gifts">
            <img src={tg_background} alt="gifts_background" className="gifts-background" />
            <div className="in-gifts">
              <span className="gifts-header">Gifts</span>
              <div className="gift-gif-and-count">
                <img src={gift_emoji_animated} alt="gift" className="gift-gif" />
                <div className="gifts-count">x1</div>
              </div>
              <span className="buy-gift">Buy</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
