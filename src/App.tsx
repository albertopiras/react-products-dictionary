import React, { PureComponent } from 'react';
import './App.scss';
import { createBrowserHistory } from "history";
import logo from './logo.svg';

import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import DictionariesPage from 'components/pages/DictionariesPage';
import HomePage from 'components/pages/HomePage';

const history = createBrowserHistory();
class App extends PureComponent {

  componentDidMount = () => {
  };

  render() {

    return (

      <BrowserRouter>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center"><img src={logo} className="app-logo" alt="logo" /></a>
            <ul className="left">
              <li><NavLink exact={true} activeClassName='active' to='/'>Home</NavLink></li>
              <li><NavLink exact={true} activeClassName='active' to='/dictionaries'>Dictionaries</NavLink></li>
            </ul>
          </div>
        </nav>
        <Route exact path="/" component={HomePage} />
        <Route path="/dictionaries" component={DictionariesPage} />
      </BrowserRouter>
    );
  }
}

export default App;

