import { FC, useContext, useMemo, useState } from 'react';
import { EThems, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './themeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as EThems) || EThems.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<EThems>(defaultTheme);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
