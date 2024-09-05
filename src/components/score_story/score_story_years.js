import React from "react";
import "../../css/score_story_style/score_story_years.css";
import { useNavigate } from "react-router-dom";

//img
import congratulations_emoji_animated from '../../img/home/congratulations_emoji_animated.gif';


function ScoreStoryYears() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/ScoreStoryPremium"); // Навигация на ScoreStoryPremium
  };

  return (
    <>
      <div className="lines_years">
        <div className="line-1-years"></div>
        <div className="line-2-years"></div>
        <div className="line-3-years"></div>
      </div>

      <div className="score-story-years-container">
        <img src={congratulations_emoji_animated} alt="flame_emoji_animated" className="burn-emoji-animated-story" />
        <span className="elite-member">Elite Member</span>
        <span className="joined-telegram">You've joined Telegram</span>
        <span className="years">7</span>

        <div className="years-info">
          <span className="years-ago">years ago</span>
          <span className="account-top">Your account number is #439244929</span>
          <span className="top">You are in top 10% Telegram users</span>
        </div>

        <div className="continue-button-years" onClick={handleContinue}>
          <span className="continue-text">Continue</span>
        </div>
      </div>

    </>
  );
}

export default ScoreStoryYears;
