import React, { useState, useEffect } from "react";
import "../css/tasks.css";

// Images
import tasks_gift_emoji_animated from "../img/tasks_gift_emoji_animated.gif";
import tg_icon from "../img/tasks/tg_icon.webp";
import x_icon from "../img/tasks/x_icon.webp";
import flame_emoji from "../img/flame_emoji.webp";
import wallet_icon from "../img/tasks/wallet_icon.webp";
import friends_icon from '../img/tasks/friends_icon.png';
import check_mark from "../img/tasks/check-mark.png";

const tg = window.Telegram.WebApp;

const handleEmojiIInUsername = () => {

};

const handleInvitedFriends = () => {

};

const handleConectedWallet = () => {

};

const handleOpenTelegramChannel = () => {
  tg.openTelegramLink("https://t.me/flame_coin_community");
};

const handleOpenX = () => {
  tg.openLink("https://x.com/realDogsHouse"); // Заменить на реальный Twitter/X
};


const handleShareOnX = () => {
  tg.openLink("https://x.com/realDogsHouse"); // Заменить на реальный репост
};

const tasksData = [
  {
    id: 0,
    title: "Add 🔥 in Telegram name",
    points: "+1 Gift 🎁",
    icon: flame_emoji,
    onClick: handleEmojiIInUsername,
  },
  {
    id: 1,
    title: "Invite 5 friends",
    points: "+5 Gifts 🎁",
    icon: friends_icon,
    onClick: handleInvitedFriends,
  },
  {
    id: 2,
    title: "Connect your wallet",
    points: "+1 Gift 🎁",
    icon: wallet_icon,
    onClick: handleConectedWallet,
  },
  {
    id: 3,
    title: "Subscribe to Flame Telegram",
    points: "+100 Flame 🔥",
    icon: tg_icon,
    onClick: handleOpenTelegramChannel,
  },
  {
    id: 4,
    title: "Subscribe to Flame X",
    points: "+100 Flame 🔥",
    icon: x_icon,
    onClick: handleOpenX,
  },
  {
    id: 5,
    title: "Share about us on X",
    points: "+100 Flame 🔥",
    icon: x_icon,
    onClick: handleShareOnX,
  },
];

const Tasks = () => {
  tg.setHeaderColor("#000000");

  const [loading, setLoading] = useState(true);
  const [userTasks, setUserTasks] = useState([]);

  //Loader IMG
  useEffect(() => {
    const imageUrls = [
      tasks_gift_emoji_animated,
      tg_icon,
      x_icon,
      flame_emoji,
      wallet_icon,
      friends_icon,
      check_mark,
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

    //Запрос на серв
    const fetchTasks = async () => {
      try {
        const userId = tg.initDataUnsafe.user.id;
        const response = await fetch(`https://more-gratefully-hornet.ngrok-free.app/tasks/${userId}`, {
          headers: {
            'ngrok-skip-browser-warning': 'true',
          },
        });

        if (!response.ok) {
          throw new Error('Ошибка при получении задач');
        }

        const tasks = await response.json();
        console.log("Полученные задачи:", tasks);
        setUserTasks(tasks);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return (
      <div className="loader-box">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="container-tasks">
      <img src={tasks_gift_emoji_animated} alt="gift" className="tasks_emoji_animated" />
      <span className="tasks-header">Tasks</span>
      <span className="tasks-description">Complete tasks and get more Flame.</span>
      <div className="tasks">
        {tasksData.map((task) => {
          // Найти задачу пользователя по индексу
          const userTask = userTasks[task.id] || {}; // Используйте id для поиска в userTasks

          // Логирование для отладки
          console.log(`Задача: ${task.title}, статус выполнения: ${userTask.completed !== undefined ? userTask.completed : "не найдено"}`);

          return (
            <div className="task" key={task.id}>
              <img src={task.icon} alt={`${task.title} icon`} className="icon" />
              <div className="text">
                <div className="title">{task.title}</div>
                <div className="points">{task.points}</div>
              </div>
              {userTask.completed ? (
                <div className="task-done">
                  <img src={check_mark} alt="check_mark" className="check_mark" />
                </div>
              ) : (
                <div className="open-button" onClick={task.onClick}>
                  <div className="open">Start</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
