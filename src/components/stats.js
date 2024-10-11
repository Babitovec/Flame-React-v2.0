import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/stats.css";

// Images
import crown_emoji_animated_compressed from "../img/crown_emoji_animated_compressed.gif";
import leaderboard_member_flame_icon from "../img/flame_emoji.webp";

const tg = window.Telegram.WebApp;

const Stats = ({ username }) => {
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [leaderboard, setLeaderboard] = useState([]); // Топ пользователей, инициализирован как пустой массив
  const [totalUsers, setTotalUsers] = useState(0); // Общее количество пользователей

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
        const response = await axios.get(`https://more-gratefully-hornet.ngrok-free.app/leaderboard`,
          //Для нгрок только
          {
            headers: {
              'ngrok-skip-browser-warning': 'true',
            },
          });
        setLeaderboard(response.data.leaderboard || []); // Добавляем || [] чтобы избежать undefined
        setTotalUsers(response.data.totalUsers || 0); // Аналогично для totalUsers
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="loader-box">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <div className="container-stats">
        <img src={crown_emoji_animated_compressed} alt="cronw_emoji_animated" className="crown-emoji-animated" />
        <span className="stats-header">Leaderboard</span>

        <div className="user-stats-box-container">
          <div className="user-stats-box">
            <div className="username-and-flame-count-box">
              <div className="stats_username">{username}</div>
              <div className="burn-count">5738 Flame</div>
            </div>
            <div className="user-rank">#256791</div>
          </div>
        </div>

        <div className="total-users">{totalUsers} Flamers</div>

        <div className="leaderboard">
          {leaderboard.length > 0 ? (
            leaderboard.map((user, index) => (
              <div key={index} className="leaderboard-member">
                <div className="rank-and-username-container">
                  <div className={`rank-leaderbord-${index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "bronze" : ""}`}>
                    #{index + 1}
                  </div>
                </div>
                <div className="leaderboard-member-username">{user.username}</div>
                <div className="leaderboard-member-flames">
                  <div className="leaderboard-member-flames-count">{user.flames_count.toLocaleString()}</div>
                  <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
                </div>
              </div>
            ))
          ) : (
            <div>No users in leaderboard</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Stats;
