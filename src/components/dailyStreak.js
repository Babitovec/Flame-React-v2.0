import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import "../css/dailyStreak.css";

// Images
import gz_daily from '../img/gz-daily.gif';
import flame_emoji from "../img/flame_emoji.webp";
import gift_emoji from '../img/home/gift_emoji.webp';
import confettie from "../img/confetti.json"

const tg = window.Telegram.WebApp;

const DailyStreak = () => {
    tg.setHeaderColor("#000000");

    const navigate = useNavigate();

    const handleContinue = () => {
        navigate("/Home"); // Навигация на Home
    };

    return (
        <>
            <div className="streak-container">
                <Lottie className="confettie" loop={false} animationData={confettie} />
                <img src={gz_daily} alt="flame_emoji_animated" className="logo_streak" />
                <div className="day-streak">2</div>
                <div className="rewards-title">day check-in</div>
                <div className="rewards-container">
                    <div className="reward-box-1">
                        <img src={flame_emoji} alt="flame_emoji_animated" className="emoji_reward" />
                        <div className="count-daily-reward">100</div>
                        <div className="reward-txt">Flames</div>
                    </div>
                    <div className="reward-box-2">
                        <img src={gift_emoji} alt="flame_emoji_animated" className="emoji_reward" />
                        <div className="count-daily-reward">1</div>
                        <div className="reward-txt">Gifts</div>
                    </div>
                </div>
                <div className="description-daily-reward">Come back tommorow for check-in day 3 <br />Skipping a day resets your check-in</div>
                <div className="continue-button-daily-reward" onClick={handleContinue}>
                    <span className="continue-text" >Continue</span>
                </div>
            </div>
        </>
    );
};

export default DailyStreak;