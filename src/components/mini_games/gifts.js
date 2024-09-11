import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/mini_games_style/gifts.css";

import gift_emoji_animated from '../../img/home/gift_emoji_animated.gif';
import congratulations_emoji_animated from '../../img/home/congratulations_emoji_animated.gif';

const tg = window.Telegram.WebApp;

const Gifts = () => {
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const navigate = useNavigate(); // Инициализация навигации

  tg.setHeaderColor("#FF6C00");

  const [isClicked, setIsClicked] = useState(false);
  const [isExploded, setIsExploded] = useState(false);
  const [showCongratulations] = useState(true);

  useEffect(() => {

    // Функция для проверки загрузки фонового изображения
    const checkBackgroundImageLoaded = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    };

    const backgroundImageUrl = "/src/img/home/gifts_mini_game_background.webp";
        checkBackgroundImageLoaded(backgroundImageUrl)
            .then(() => {
                setLoading(false); // Фоновое изображение загружено
            })
            .catch(() => {
                setLoading(false); // Фоновое изображение не удалось загрузить
            });

    const imageUrls = [
      gift_emoji_animated,
      congratulations_emoji_animated,
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
          setLoading(false); // Все изображения загружены (с учетом ошибок)
        }
      };
    });

    //Кнопка назад
    tg.BackButton.show();
    // Устанавливаем обработчик для кнопки "Назад"
    tg.BackButton.onClick(() => {
      // Перенаправляем на страницу Home с помощью navigate
      navigate('/home');
      // Скрываем кнопку "Назад"
      tg.BackButton.hide();
      tg.setHeaderColor("#000000");
    });

  }, [navigate]); // Добавляем navigate как зависимость

  if (loading) {
    return (
      <div className="loader-box">
        <div class="loader"></div>
      </div>
    );
  }

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
