import React, { useEffect, useState } from "react";
import "../../css/mini_games_style/gifts.css";

import gift_emoji_animated from '../../img/home/gift_emoji_animated.gif';
import congratulations_emoji_animated from '../../img/home/congratulations_emoji_animated.gif';

const tg = window.Telegram.WebApp;

const Gifts = () => {

    tg.setHeaderColor("#FF6C00");

    const [isClicked, setIsClicked] = useState(false);
    const [isExploded, setIsExploded] = useState(false);
    const [showCongratulations] = useState(true);

    useEffect(() => {
        // Показываем кнопку "Назад"
        tg.BackButton.show();

        // Устанавливаем обработчик для кнопки "Назад"
        tg.BackButton.onClick(() => {
            // Перенаправляем на страницу /Home
            window.location.href = '/';
            // Скрываем кнопку "Назад"
            tg.BackButton.hide();
        });

    }, []);

    const openGift = () => {
        tg.HapticFeedback.impactOccurred('light');
        setIsClicked(true);

        setTimeout(() => {
            setIsExploded(true);
        }, 200);
    };

    return (
        <div className="gifts-container">
            <div className="gifts_header_in_game">Gifts</div>
            <div className="gift-and-gifts-count">
            {!isClicked ? (
                <img 
                    src={gift_emoji_animated} 
                    alt="Gift" 
                    className="gift_emoji_animated" 
                    onClick={openGift} 
                />
            ) : (
                isExploded && showCongratulations ? (
                    <img 
                        src={congratulations_emoji_animated} 
                        alt="Congratulations" 
                        className="congratulations_emoji_animated" 
                    />
                ) : (
                    isExploded && !showCongratulations ? null : (
                        <img 
                            src={gift_emoji_animated} 
                            alt="Gift Exploded" 
                            className="gift_emoji_animated explosion" 
                        />
                    )
                )
            )}
            <div className="gifts_count_in_game">x1</div>
            </div>
        </div>
    );
};

export default Gifts;
