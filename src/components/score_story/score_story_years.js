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
      <div className="lines_years">
        <div className="line-1-years"></div>
        <div className="line-2-years"></div>
        <div className="line-3-years"></div>
      </div>

      <div className="score-story-container">
        <img src={congratulations_emoji_animated} alt="flame_emoji_animated" className="burn-emoji-animated-story" />
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

export default ScoreStoryYears;
