import React, { useEffect, useState } from "react";
import axios from 'axios';
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
    const [streakDay, setStreakDay] = useState(undefined);
    const [flamesReward, setFlamesReward] = useState(undefined);
    const [giftsReward, setGiftsReward] = useState(undefined);

    tg.setHeaderColor("#000000");

    useEffect(() => {
        const userData = tg.initDataUnsafe.user;

        if (userData) {
            // Запрос для получения ежедневного бонуса
            axios.get(`https://more-gratefully-hornet.ngrok-free.app/daily-bonus/${userData.id}`)
                .then(response => {
                    const { today_streak_day, flames_count, gifts_count } = response.data;
                    setStreakDay(today_streak_day);
                    setFlamesReward(flames_count);
                    setGiftsReward(gifts_count);
                })
                .catch(error => {
                    console.error('Ошибка при получении бонуса:', error);
                });
        }

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
                <div className="day-streak">{streakDay}</div>
                <div className="rewards-title">day check-in</div>
                <div className="rewards-container">
                    <div className="reward-box-1">
                        <img src={flame_emoji} alt="flame_emoji_animated" className="emoji_reward" />
                        <div className="count-daily-reward">{flamesReward}</div>
                        <div className="reward-txt">Flames</div>
                    </div>
                    <div className="reward-box-2">
                        <img src={gift_emoji} alt="gift_emoji" className="emoji_reward" />
                        <div className="count-daily-reward">{giftsReward}</div>
                        <div className="reward-txt">Gifts</div>
                    </div>
                </div>
                <div className="description-daily-reward">
                    {`Come back tomorrow for check-in day ${streakDay + 1}`}<br />
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
