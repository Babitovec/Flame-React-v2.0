import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./components/home.js";
import Tasks from "./components/tasks.js";
import Frens from "./components/frens.js";
import Stats from "./components/stats.js";
import Navigation from "./components/navigation.js";

const tg = window.Telegram.WebApp;

tg.expand();
tg.disableVerticalSwipes();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      username: tg.initDataUnsafe?.user?.username || 'Guest'
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    const { currentPage, username } = this.state;

    let pageContent;
    switch (currentPage) {
      case 'home':
        pageContent = <Home username={username} />;
        break;
      case 'tasks':
        pageContent = <Tasks />;
        break;
      case 'frens':
        pageContent = <Frens />;
        break;
      case 'stats':
        pageContent = <Stats username={username} />;
        break;
      default:
        pageContent = <Home username={username} />;
    }

    return (
      <div>
        <TransitionGroup>
          <CSSTransition
            key={currentPage}
            classNames="fade"
            timeout={300}
          >
            <div>
              {pageContent}
            </div>
          </CSSTransition>
        </TransitionGroup>
        <Navigation changePage={this.changePage} currentPage={currentPage} />
      </div>
    );
  }
}

export default App;
