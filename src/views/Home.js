import React, { Component } from 'react'
import { ThemedContext , themes } from '../components/themed-context';

import ThemeContainer from '../components/themeContainer/index';

export default class Home extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      theme: themes.light
    }

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState( state => ({
      theme: state.theme === themes.dark
        ? themes.light
        : themes.dark
    }))
  }

  render() {
    return (
      <div className="home-page page">
        <ThemedContext.Provider value={ this.state.theme }>
            <button onClick={ this.toggleTheme }>toggle theme</button>
            <section>
              <ThemeContainer />
            </section>
        </ThemedContext.Provider>
      </div>
    )
  }
}
