import React, { useContext, createContext } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import defaultTheme from '@compassion-gds/tokens';

const ThemeContext = createContext(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ theme = defaultTheme, children }) => (
  <ThemeContext.Provider value={theme}>
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
  </ThemeContext.Provider>
);

ThemeProvider.propTypes = {
  theme: PropTypes.shape({
    component: PropTypes.objectOf(PropTypes.object).isRequired,
  }),
};

ThemeProvider.defaultProps = {
  theme: defaultTheme,
};
