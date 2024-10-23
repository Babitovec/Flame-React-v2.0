import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import "../css/dailyStreak.css";

// Images
import gz_daily from '../img/gz-daily.gif';
import flame_emoji from "../img/flame_emoji.webp";
import gift_emoji from '../img/home/gift_emoji.webp';
import confettie from "../img/confetti.json";

const tg = window.Telegram.WebApp;

const DailyStreak = ({ handleContinue }) => {
    const [loading, setLoading] = useState(true); // Состояние загрузки изображений

    tg.setHeaderColor("#000000");

    useEffect(() => {
        const imageUrls = [
            gz_daily,
            flame_emoji,
            gift_emoji,
        ];

        let imagesLoaded = 0;
        const totalImages = imageUrls.length;

        imageUrls.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                imagesLoaded += 1;
                if (imagesLoaded === totalImages) {
                    setLoading(false); // Все изображения загружены
                }
            };
            img.onerror = () => {
                imagesLoaded += 1;
                if (imagesLoaded === totalImages) {
                    setLoading(false); // Все изображения загружены с учетом ошибок
                }
            };
        });
    }, []);

    const handleContinueClick = () => {
        handleContinue(); // Вызываем переданный метод для скрытия DailyStreak
    };

    // Пока изображения загружаются, показываем лоадер
    if (loading) {
        return (
            <div className="loader-box">
                <div className="loader"></div>
            </div>
        );
    }

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
                        <img src={gift_emoji} alt="gift_emoji" className="emoji_reward" />
                        <div className="count-daily-reward">1</div>
                        <div className="reward-txt">Gifts</div>
                    </div>
                </div>
                <div className="description-daily-reward">
                    Come back tomorrow for check-in day 3 <br />
                    Skipping a day resets your check-in
                </div>
                <div className="continue-button-daily-reward" onClick={handleContinueClick}>
                    <span className="continue-text">Continue</span>
                </div>
            </div>
            <div className="continue-background"></div>
        </>
    );
};

export default DailyStreak;
