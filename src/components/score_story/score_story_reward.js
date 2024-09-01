import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/score_story_style/score_story_reward.css";

//img
import flame_emoji_animated from '../../img/burn_emoji_animated.gif';

function ScoreStoryReward() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/Home"); // Навигация на Home
  };

  return (
    <>
      <div className="lines_reward">
        <div className="line-1-reward"></div>
        <div className="line-2-reward"></div>
        <div className="line-3-reward"></div>
      </div>

      <div className="score-story-container">
        <img src={flame_emoji_animated} alt="flame_emoji_animated" className="burn-emoji-animated-story" />
        <div className="elite-member">Elite Member</div>
        <div className="joined-telegram">You've joined Telegram</div>
        <span className="years">7</span>
        <div className="years-ago">years ago</div>
        <div className="account-top">Your account number is #439244929</div>
        <div className="top">You are in top 10% Telegram users</div>
        <div className="continue-button" onClick={handleContinue}>
          <span className="continue-text">Continue</span>
        </div>
      </div>
    </>
  );
}

export default ScoreStoryReward;
