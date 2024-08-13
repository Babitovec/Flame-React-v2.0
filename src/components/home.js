import React from "react";
import "../css/home.css";

// Images
import background_filled_colour from '../img/home/score_background_430x70_without_fade.webp';
import burn_emoji_animated from '../img/burn_emoji_animated.gif';
import gift_emoji_animated from '../img/home/gift_emoji_animated.gif';
import play_icon from "../img/home/play_icon3.webp"

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="container-home">
          <div className="score-stats">
            <img src={background_filled_colour} alt="background_filled_colour" className="score-background" />
            <div className="score-stats-box">
              <img src={play_icon} alt="paly_icon" className="paly_icon" />
              <div className="score-stats-text">Your Score</div>
            </div>
          </div>

          <div className="profile">
            <img src={burn_emoji_animated} alt="PFP" className="profile-pic" />
            <div className="home_username">{this.props.username}</div>
            <div className="score">
              <span className="score-count">5739</span>
            </div>
            <span className="flame-text-score">FLAME</span>
          </div>

          <div className="gifts">
            <div className="in-gifts">
              <span className="gifts-header">Gifts</span>
              <div className="gift-gif-and-count">
                <img src={gift_emoji_animated} alt="gift" className="gift-gif" />
                <div className="gifts-count">x1</div>
              </div>
              <span className="buy-gift">Buy</span>
            </div>
          </div>

          <div className="gifts">
            <div className="in-gifts-burn">
              <span className="gifts-header">Burn</span>
              <div className="gift-gif-and-count">
                <img src={burn_emoji_animated} alt="gift" className="gift-gif" />
              </div>
              <span className="buy-gift">Burn</span>
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default Home;
