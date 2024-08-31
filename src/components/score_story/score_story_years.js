import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/score_story_style/score_story_years.css";

//img
import congratulations_emoji_animated from '../../img/home/congratulations_emoji_animated.gif';

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
        <img src={congratulations_emoji_animated} alt="flame_emoji_animated" className="burn-emoji-animated-story" />
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

export default ScoreStoryYears;
