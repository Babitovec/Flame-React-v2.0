import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/score_story_style/score_story_premium.css";

//img
import premium_emoji_animated from '../../img/home/tg_premium_emoji_animated.gif'

function ScoreStoryPremium() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/ScoreStoryReward"); // Навигация на ScoreStoryReward
  };

  return (
    <>
      <div class="lines_premium">
        <div class="line-1-premium"></div>
        <div class="line-2-premium"></div>
        <div class="line-3-premium"></div>
      </div>

      <div class="score-story-container">
        <img src={premium_emoji_animated} alt="flame_emoji_animated" className="burn-emoji-animated-story" />
        <div class="elite-member">Elite Member</div>
        <div class="joined-telegram">You've joined Telegram</div>
        <span class="years">7</span>
        <div class="years-ago">years ago</div>
        <div class="account-top">Your account number is #439244929</div>
        <div class="top">You are in top 10% Telegram users</div>
        <div class="continue-button" onClick={handleContinue}>
          <span class="continue-text">Continue</span>
        </div>
      </div>
    </>
  );
}

export default ScoreStoryPremium;
