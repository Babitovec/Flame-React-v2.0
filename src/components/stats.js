import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "../css/stats.css";

// Images
import crown_emoji_animated_compressed from "../img/crown_emoji_animated_compressed.gif";
import leaderboard_member_flame_icon from "../img/flame_emoji.webp";

const tg = window.Telegram.WebApp;

const Stats = ({ username }) => {
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [leaderboard, setLeaderboard] = useState([]); // Топ пользователей, инициализирован как пустой массив
  const [totalUsers, setTotalUsers] = useState(0); // Общее количество пользователей
  const [userFlamesCount, setUserFlamesCount] = useState(0); // Flames пользователя
  const [userRank, setUserRank] = useState(undefined); // Место пользователя в рейтинге

  useEffect(() => {
    tg.setHeaderColor("#000000");

    // Загрузка изображений
    const imageUrls = [crown_emoji_animated_compressed, leaderboard_member_flame_icon];
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

    // Получение данных с бэка
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(`https://more-gratefully-hornet.ngrok-free.app/leaderboard`, {
          headers: {
            'ngrok-skip-browser-warning': 'true',
          },
        });

        const leaderboardData = response.data.leaderboard || [];
        setLeaderboard(leaderboardData); // Устанавливаем таблицу лидеров
        setTotalUsers(response.data.totalUsers || 0); // Устанавливаем общее количество пользователей

        // Поиск текущего пользователя в таблице лидеров
        const user = leaderboardData.find((user) => user.username === username);
        if (user) {
          setUserFlamesCount(user.flames_count); // Устанавливаем количество flames
          setUserRank(leaderboardData.indexOf(user) + 1); // Устанавливаем позицию пользователя в таблице лидеров
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchLeaderboard();
  }, [username]);

  if (loading) {
    return (
      <div className="loader-box">
        <div className="loader"></div>
      </div>
    );
  }

  if (userFlamesCount === 0 || userRank === 0 || totalUsers === 0 ) {
    return (
      <div className="container-stats">
        <img src={crown_emoji_animated_compressed} alt="cronw_emoji_animated" className="crown-emoji-animated" />
        <span className="stats-header">Leaderboard</span>

        {/* Отображаем скелетоны вместо данных пользователя */}
        <Skeleton className="user-stats-box-container-skeleton" />
        <Skeleton className="total-users-skeleton" />
        <div className="leaderboard">
          {Array(8).fill(0).map((_, index) => (
            <Skeleton key={index} className="leaderboard-member-skeleton" />
          ))}
        </div>

      </div>
    );
  }

  return (
    <div className="container-stats">
      <img src={crown_emoji_animated_compressed} alt="cronw_emoji_animated" className="crown-emoji-animated" />
      <span className="stats-header">Leaderboard</span>

      {/* Отображаем информацию о пользователе */}
      <div className="user-stats-box-container">
        <div className="user-stats-box">
          <div className="username-and-flame-count-box">
            <div className="stats_username">{username}</div>
            <div className="burn-count">{userFlamesCount.toLocaleString('en-US')} FLAME</div>
          </div>
          <div className="user-rank">#{userRank || "N/A"}</div>
        </div>
      </div>

      {/* Отображаем общее количество пользователей */}
      <div className="total-users">{totalUsers.toLocaleString('en-US')} Flamers</div>

      <div className="leaderboard">
        {leaderboard.map((user, index) => (
          <div key={index} className="leaderboard-member">
            <div className="rank-and-username-container">
              <div className="rank-leaderbord-container">
                <div className={`rank-leaderbord-${index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : ""}`}>
                  #{index + 1}
                </div>
              </div>
              <div className="leaderboard-member-username">{user.username}</div>
            </div>
            <div className="leaderboard-member-flames">
              <div className="leaderboard-member-flames-count">{user.flames_count.toLocaleString('en-US')}</div>
              <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Stats;