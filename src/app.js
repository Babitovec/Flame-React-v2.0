import React from "react";
import { BrowserRouter } from "react-router-dom";

//Components
import Navigation from "./components/navigation.js";

const tg = window.Telegram.WebApp;

tg.expand();
tg.disableVerticalSwipes();

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
              
          <Navigation />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
