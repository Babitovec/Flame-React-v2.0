import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/score_story_style/score_story_premium.css";

//img
import premium_emoji_animated from '../../img/home/tg_premium_emoji_animated.gif'
import flame_emoji from "../../img/flame_emoji.webp"

function ScoreStoryPremium() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/ScoreStoryReward"); // Навигация на ScoreStoryReward
  };

  return (
    <>
      <div className="lines_premium">
        <div className="line-1-premium"></div>
        <div className="line-2-premium"></div>
        <div className="line-3-premium"></div>
      </div>
      <div className="score-story-premium-container">
        <img src={premium_emoji_animated} alt="premium_emoji_animated" className="premium_emoji_animated" />
        <span className="telegram-premium-handline">Telegram Premium</span>
        <span className="truly-respected-user">Truly respected user</span>
        <span className="premium-user">Premium user</span>
        <span className="status-confirmed">Status confirmed ✅</span>
        <div className="flames-for-premium">
          <span className="flames-for-premium-count">+1000</span>
          <img src={flame_emoji} alt="flame_emoji" className="flame-emoji-premium" />
        </div>
        <div className="continue-button-premium" onClick={handleContinue}>
          <span className="continue-text">Continue</span>
        </div>
      </div>
    </>
  );
}

export default ScoreStoryPremium;
