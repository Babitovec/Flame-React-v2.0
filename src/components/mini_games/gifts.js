import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Импорт Axios
import Skeleton from "react-loading-skeleton";
import CountUp from 'react-countup';
import "../../css/mini_games_style/gifts.css";

import gift_emoji_animated from '../../img/home/gift_emoji_animated.gif';
import congratulations_emoji_animated from '../../img/home/congratulations_emoji_animated.gif';

const tg = window.Telegram.WebApp;

const Gifts = () => {
  tg.setHeaderColor("#FF6C00");
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const navigate = useNavigate(); // Инициализация навигации
  const [giftsCount, setGiftsCount] = useState(undefined); // Состояние для gifts_count
  const [flamesReceived, setFlamesReceived] = useState(undefined); // Состояние для хранения полученных flames
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

  const fetchUserData = async () => {
    try {
      const userId = tg.initDataUnsafe.user?.id;
      const response = await axios.get(`https://flameapp-babito.amvera.io/users/${userId}`);
      const userData = response.data;
      setGiftsCount(userData.gifts_count);
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
    }
  };

  fetchUserData(); // Загружаем данные пользователя при загрузке компонента

  const updateGiftsCount = async () => {
    try {
      const userId = tg.initDataUnsafe.user?.id;
      const response = await axios.post(`https://flameapp-babito.amvera.io/update-gifts/${userId}`, {
        action: 'decrease'
      });

      // Получаем количество flames из ответа сервера
      const { flames_count } = response.data;
      setGiftsCount(response.data.gifts_count);
      setFlamesReceived(flames_count); // Сохраняем полученные flames
      setGiftsCount(response.data.gifts_count);
    } catch (error) {
      console.error('Ошибка при обновлении количества подарков:', error);
    }
  };

  const openGift = () => {
    tg.HapticFeedback.impactOccurred('light');
    setIsClicked(true);

    // Отправляем запрос на сервер для обновления количества подарков
    updateGiftsCount();

    setTimeout(() => {
      setIsExploded(true);
    }, 200);
  };

  if (loading) {
    return (
      <div className="loader-box">
        <div class="loader"></div>
      </div>
    );
  }

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
            <>
              <img
                src={congratulations_emoji_animated}
                alt="Congratulations"
                className="congratulations_emoji_animated"
              />
              <div className="flames_received">
                <div className="countup-wrapper">
                  <CountUp start={0} end={flamesReceived} duration={2.5} />
                </div>
              </div>
            </>
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
        <div className="gifts_count_in_game">
          {giftsCount !== undefined ? `x${giftsCount}` : <Skeleton baseColor="#FFD9A8" highlightColor="#FF9000" />}
        </div>
      </div>
    </div>
  );
};

export default Gifts;
