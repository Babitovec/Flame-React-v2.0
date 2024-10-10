import React, { useEffect, useState } from "react";
import "../css/home.css";
import { NavLink } from "react-router-dom";
import axios from 'axios'; // Импорт Axios
import Skeleton from "react-loading-skeleton";

// Images
import flame_emoji from "../img/flame_emoji.webp";
import flame_emoji_animated from '../img/burn_emoji_animated.gif';
import gift_emoji from '../img/home/gift_emoji.webp';
import play_icon from "../img/home/play-button.webp";

const tg = window.Telegram.WebApp;

const Home = () => {
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [flamesCount, setFlamesCount] = useState(undefined); // Состояние для flames_count
  const [giftsCount, setGiftsCount] = useState(undefined); // Состояние для gifts_count

  useEffect(() => {
    tg.setHeaderColor("#FF5718");

    //Для лоадера
    const imageUrls = [
      flame_emoji,
      flame_emoji_animated,
      gift_emoji,
      play_icon,
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

    //Для полчение данных с БД
    const fetchUserData = async () => {
      try {
        const userId = tg.initDataUnsafe.user?.id;
        const response = await axios.get(`https://more-gratefully-hornet.ngrok-free.app/users/${userId}`);
        const userData = response.data;
        setFlamesCount(userData.flames_count);
        setGiftsCount(userData.gifts_count);
      } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
      }
    };

    fetchUserData(); // Загружаем данные пользователя при загрузке компонента
  }, []);

  const handleNavigationClick = () => {
    tg.HapticFeedback.impactOccurred('light');
  };

  if (loading) {
    return (
      <div className="loader-box">
        <div class="loader"></div>
      </div>
    );
  }

  return (
    <>
      <div className="container-home">
        <div className="score-stats">
          <NavLink className="score-stats-box" to="/ScoreStoryYears" onClick={handleNavigationClick}>
            <img src={play_icon} alt="play_icon" className="play_icon" />
            <div className="score-stats-text">Your Score</div>
          </NavLink>
        </div>

        {/* Для эффекта затмения скор статс <div className="home-box">  */}
        <div className="home-box">
          
          <div className="border-box-home"></div>

          <div className="profile">
            <img src={flame_emoji_animated} alt="flame_emoji_animated" className="flame_logo" />
            <div className="score">
            <div className="score-count">{flamesCount !== undefined ? flamesCount.toLocaleString('en-US') : <Skeleton />}</div> {/* Вывод flames_count */}
            </div>
            <span className="flame-text-score">FLAME</span>
          </div>

          <div className="gifts">
            <div className="in-gifts">
              <span className="gifts-header">Gifts</span>
              <div className="gift-gif-and-count">
                <img src={gift_emoji} alt="gift" className="gift-gif" />
                <div className="gifts-count">
                  {giftsCount !== undefined ? `x${giftsCount}` : <Skeleton baseColor="#FFD9A8" highlightColor="#FF9000" />}
                </div>

              </div>
              <NavLink className="open-gift" to="/Gifts" onClick={handleNavigationClick}>Open</NavLink>
            </div>
          </div>

          <div className="burn">
            <div className="in-gifts-burn">
              <span className="gifts-header">Burn</span>
              <div className="gift-gif-and-count">
                <img src={flame_emoji} alt="gift" className="gift-gif" />
                <div className="total-burned-text">Burned: 2313</div>
              </div>
              <span className="open-gift">Open</span>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Home;