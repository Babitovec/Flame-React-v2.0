import React from "react";
import { useNavigate } from "react-router-dom";
import CountUp from 'react-countup';
import "../../css/score_story_style/score_story_reward.css";

// img
import flame_emoji_animated from '../../img/burn_emoji_animated.gif';

const ScoreStoryReward = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/ScoreStoryShare"); // Навигация на Home
  };

  return (
    <>
      <div className="lines_reward">
        <div className="line-1-reward"></div>
        <div className="line-2-reward"></div>
        <div className="line-3-reward"></div>
        <div className="line-4-reward"></div>
      </div>

      <div className="score-story-reward-container">
        <span className="reward-handline">You are amazing!</span>
        <span className="reward">Here is your reward</span>
        <img src={flame_emoji_animated} alt="flame_emoji_animated" className="flame-emoji-animated-story-reward" />
        <div className="flames-count-story">
          <div className="countup-wrapper">
            <CountUp start={0} end={2567} duration={2.5} />
          </div>
        </div>
        <span className="flame-text-story">FLAME</span>
        <span className="thanks">Thanks for your time on Telegram!</span>
        <div className="continue-button-reward" onClick={handleContinue}>
          <span className="continue-text">Continue</span>
        </div>
      </div>
    </>
  );
}

export default ScoreStoryReward;
