import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/score_story_style/score_story_years.css";

//img
import flame_emoji_animated from '../../img/burn_emoji_animated.gif';

function ScoreStoryYears() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/ScoreStoryPremium"); // Навигация на новый маршрут через React Router
  };

  return (
    <>
      <div class="lines_years">
        <div class="line-1-years"></div>
        <div class="line-2-years"></div>
        <div class="line-3-years"></div>
      </div>

      <div class="score-story-container">
        <div class="elite-member">Elite Member</div>
        <div class="joined-telegram">You've joined Telegram</div>
        <div class="years-container">
          <img src={flame_emoji_animated} alt="flame_emoji_animated" className="burn-emoji-animated-story" />
          <div class="years">7</div>
        </div>
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

export default ScoreStoryYears;
