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
    id: 0,
    title: "Add 🔥 in Telegram name",
    points: "+1 Gift 🎁",
    icon: flame_emoji,
  },
  {
    id: 1,
    title: "Invite 5 friends",
    points: "+5 Gifts 🎁",
    icon: friends_icon,
  },
  {
    id: 2,
    title: "Connect your wallet",
    points: "+1 Gift 🎁",
    icon: wallet_icon,
  },
  {
    id: 3,
    title: "Subscribe to Flame Telegram",
    points: "+100 Flame 🔥",
    icon: tg_icon,
  },
  {
    id: 4,
    title: "Subscribe to Flame X",
    points: "+100 Flame 🔥",
    icon: x_icon,
  },
  {
    id: 5,
    title: "Share about us on X",
    points: "+100 Flame 🔥",
    icon: x_icon,
  },
];

const Tasks = () => {
  tg.setHeaderColor("#000000");

  const [loading, setLoading] = useState(true);
  const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
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
          // Найти задачу пользователя по ID
          const userTask = userTasks.find((t) => t._id === task.id); // Используйте _id для поиска, если это ID из базы данных

          // Логирование для отладки
          console.log(`Задача: ${task.title}, статус выполнения: ${userTask ? userTask.completed : "не найдено"}`);

          return (
            <div className="task" key={task.id}>
              <img src={task.icon} alt={`${task.title} icon`} className="icon" />
              <div className="text">
                <div className="title">{task.title}</div>
                <div className="points">{task.points}</div>
              </div>
              {userTask && userTask.completed ? (
                <div className="task-done">
                  <img src={check_mark} alt="check_mark" className="check_mark" />
                </div>
              ) : (
                <div className="open-button" onClick={() => task.onClick()}>
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
