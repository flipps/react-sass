import React from 'react';

export const themes = {
  light: {
    foreground: 'black',
    background: '#eeeeee',
    color: 'black',
    themeName: 'Light theme',
  },
  dark: {
    foreground: 'white',
    background: '#222222',
    color: 'white',
    themeName: 'Dark theme',
  }
}

export const ThemedContext = React.createContext(
  themes.dark // default config.
)