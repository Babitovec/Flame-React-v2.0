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

const tasksData = [
  {
    id: 1,
    title: "Add 🔥 in Telegram name",
    points: "+1 Gift 🎁",
    icon: flame_emoji,
  },
  {
    id: 2,
    title: "Invite 5 friends",
    points: "+5 Gifts 🎁",
    icon: friends_icon,
  },
  {
    id: 3,
    title: "Connect your wallet",
    points: "+1 Gift 🎁",
    icon: wallet_icon,
  },
  {
    id: 4,
    title: "Subscribe to Flame Telegram",
    points: "+100 Flame 🔥",
    icon: tg_icon,
    onClick: () => tg.openTelegramLink("https://t.me/flame_coin_community"),
  },
  {
    id: 5,
    title: "Subscribe to Flame X",
    points: "+100 Flame 🔥",
    icon: x_icon,
    onClick: () => tg.openLink("https://x.com/realDogsHouse"),
  },
  {
    id: 6,
    title: "Share about us on X",
    points: "+100 Flame 🔥",
    icon: x_icon,
  },
];

const Tasks = () => {
  tg.setHeaderColor("#000000");

  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [tasks, setTasks] = useState([]); // Состояние для задач

  useEffect(() => {
    const userId = tg.initDataUnsafe.user.id; // Получаем ID пользователя из Telegram

    const fetchTasks = async () => {
      try {
        const response = await fetch(`https://more-gratefully-hornet.ngrok-free.app/tasks/${userId}`); // Ваш путь к API
        const data = await response.json();
        setTasks(data); // Устанавливаем полученные задачи
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false); // Завершаем загрузку
      }
    };

    fetchTasks(); // Запрос к бэкенду
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
          const userTask = tasks.find(t => t.name === task.title);
          const isTaskDone = userTask ? userTask.completed : false;

          return (
            <div className="task" key={task.id}>
              <img src={task.icon} alt={`${task.title} icon`} className="icon" />
              <div className="text">
                <div className="title">{task.title}</div>
                <div className="points">{task.points}</div>
              </div>
              {isTaskDone ? (
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
