import React from 'react';
import './index.scss';
import { ThemedContext } from '../themed-context';

const ThemeContainer = props => {
  return(
    <div className="theme">
      <ThemedContext.Consumer>
        {theme => (
          <div
            className="theme-container"
            { ...props }
            style={{ backgroundColor: theme.background, color: theme.color }}
          >{ theme.themeName }</div>
        )}
      </ThemedContext.Consumer>
    </div>
  )
}

export default ThemeContainer;