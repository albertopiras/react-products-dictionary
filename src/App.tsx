import React, { PureComponent } from 'react';
import './App.scss';
import { createBrowserHistory } from "history";

import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import DictionariesPage from 'components/pages/DictionariesPage';
import ProductsPage from 'components/pages/ProductsPage';

const history = createBrowserHistory();
class App extends PureComponent {

  componentDidMount = () => {
  };

  render() {

    return (

      <BrowserRouter>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">Logo</a>
            <ul className="left hide-on-med-and-down">
              <li><NavLink exact={true} activeClassName='active' to='/'>Home</NavLink></li>
              <li><NavLink exact={true} activeClassName='active' to='/dictionaries'>Dictionaries</NavLink></li>
            </ul>
          </div>
        </nav>

        <Route exact path="/" component={ProductsPage} />
        <Route path="/dictionaries" component={DictionariesPage} />
      </BrowserRouter>
    );
  }
}

export default App;

