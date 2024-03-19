import { ThemeContext, EThems, LOCAL_STORAGE_THEME_KEY } from './themeContext';
import { useContext } from 'react';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggle = () => {
    const newTheme = theme === EThems.LIGHT ? EThems.DARK : EThems.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggle };
};
