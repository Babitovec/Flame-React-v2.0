import React from "react"
import * as ReactDOMClient from 'react-dom/client'; 
import  "./css/main.css" // подключение main.css, который применяется ко всему

import App from "./app.js"; // Подключение app.js 

const app = ReactDOMClient.createRoot(document.getElementById("app")) //создаем путь где будем выводить контент и указываем его как константу

app.render(<App />) //выводим в div <> то что внутри функции