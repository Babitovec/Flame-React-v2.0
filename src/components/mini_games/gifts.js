import React, { useState } from "react";
import "../../css/mini_games_style/gifts.css";

import gift_emoji_animated from '../../img/home/gift_emoji_animated.gif';
import congratulations_emoji_animated from '../../img/home/congratulations_emoji_animated.gif';

const tg = window.Telegram.WebApp;

const Gifts = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isExploded, setIsExploded] = useState(false);

    const openGift = () => {
        tg.HapticFeedback.impactOccurred('light');
        setIsClicked(true);
        
        // Запускаем анимацию взрыва
        setTimeout(() => {
            setIsExploded(true);
        }, 200); // Задержка должна совпадать с длительностью анимации взрыва
    };

    return (
        <div className="gifts-container">
            <div className="gifts_header_in_game">Gifts</div>
            {!isClicked ? (
                <img 
                    src={gift_emoji_animated} 
                    alt="Gift" 
                    className="gift_emoji_animated" 
                    onClick={openGift} 
                />
            ) : (
                isExploded ? (
                    <img 
                        src={congratulations_emoji_animated} 
                        alt="Congratulations" 
                        className="congratulations_emoji_animated" 
                    />
                ) : (
                    <img 
                        src={gift_emoji_animated} 
                        alt="Gift Exploded" 
                        className="gift_emoji_animated explosion" 
                    />
                )
            )}
            <div className="gifts_count_in_game">x1</div>
        </div>
    );
};

export default Gifts;
