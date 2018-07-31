import React, { Component, Fragment } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import About from './views/About';
import Home from './views/Home';
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <nav className="menu">
          <NavLink className="menu__link" activeClassName="menu__link--active" exact to="/">HOME</NavLink>
          <NavLink className="menu__link" activeClassName="menu__link--active" to="/about">ABOUT</NavLink>
        </nav>
        <Route render= {({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={ location }>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/about" component={About}></Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </Fragment>
    );
  }
}

export default App;
