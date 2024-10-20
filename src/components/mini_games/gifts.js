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
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const navigate = useNavigate(); // Инициализация навигации
  const [giftsCount, setGiftsCount] = useState(undefined); // Состояние для gifts_count
  const [flamesFromGift, setFlamesFromGift] = useState(0); // Состояние для хранения выпавших flames
  const [isClicked, setIsClicked] = useState(false);
  const [isExploded, setIsExploded] = useState(false);
  const [showCongratulations] = useState(true); // Состояние для управления поздравлениями
  const [canClickFlames, setCanClickFlames] = useState(false); // Состояние для контроля клика на flames_received
  const [isErrorAnimation, setIsErrorAnimation] = useState(false); // Состояние для анимации ошибки при количестве подарков 0 или undefined

  useEffect(() => {
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
          tg.setHeaderColor("#FF6C00"); // Меняем header tg когда все прогрузится
        }
      };
      img.onerror = () => {
        imagesLoaded += 1;
        if (imagesLoaded === totalImages) {
          setLoading(false); // Все изображения загружены (с учетом ошибок)
        }
      };
    });

    // Кнопка назад
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
      const response = await axios.get(`https://more-gratefully-hornet.ngrok-free.app/users/${userId}`,
        {
          headers: {
            'ngrok-skip-browser-warning': 'true',
          },
        });
      const userData = response.data;
      setGiftsCount(userData.gifts_count);
    } catch (error) {
      console.error('Ошибка при получении данных пользователя:', error);
    }
  };

  useEffect(() => {
    fetchUserData(); // Загружаем данные пользователя при загрузке компонента
  }, []); // Добавляем пустой массив зависимостей для вызова только один раз

  const updateGiftsCount = async () => {
    try {
      const userId = tg.initDataUnsafe.user?.id;
      const response = await axios.post(`https://more-gratefully-hornet.ngrok-free.app/update-gifts/${userId}`, {
        action: 'decrease'
      });

      // Получаем количество flames из ответа сервера
      const { flamesToAdd } = response.data;
      setGiftsCount(response.data.gifts_count);
      setFlamesFromGift(flamesToAdd); // Устанавливаем выпавшие flames
    } catch (error) {
      console.error('Ошибка при обновлении количества подарков:', error);
    }
  };

  const openGift = () => {
    if (giftsCount === 0 || giftsCount === undefined) {
      // Если количество подарков равно 0 или undefined, показываем анимацию ошибки
      tg.HapticFeedback.notificationOccurred('error'); // Для эффекта вибрации при ошибке
      setIsErrorAnimation(true); // Устанавливаем анимацию ошибки
      setTimeout(() => setIsErrorAnimation(false), 500); // Убираем анимацию через 0.5 секунды
      return;
    } else {
      // Иначе выполняем логику открытия подарка
      tg.HapticFeedback.impactOccurred('light');
      setIsClicked(true);
    
      // Отправляем запрос на сервер для обновления количества подарков
      updateGiftsCount();
    
      setTimeout(() => {
        setIsExploded(true);
        // Разрешаем клик через 2.5 секунды
        setTimeout(() => setCanClickFlames(true), 2500);
      }, 200);
    }
  };

  const handleFlamesClick = () => {
    if (!canClickFlames) return; // Блокируем клики до разрешённого времени

    setIsClicked(false);
    setIsExploded(false);
    setCanClickFlames(false); // Сбрасываем возможность клика
  };

  if (loading) {
    return (
      <div className="loader-box">
        <div className="loader"></div>
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
            className={`gift_emoji_animated ${isErrorAnimation ? 'error-animation' : ''}`} // Добавляем класс для анимации ошибки
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
              <div className="flames_received" onClick={handleFlamesClick}>
                <div className="countup-wrapper">
                  <CountUp start={0} end={flamesFromGift} duration={2.5} />
                </div>
                <span className="flames_text_from_gifts">FLAMES</span>
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
      </div>
      <div className="gifts_count_in_game">
        {giftsCount !== undefined ? `x${giftsCount}` : <Skeleton baseColor="#FFD9A8" highlightColor="#FF9000" />}
      </div>
    </div>
  );
};

export default Gifts;
