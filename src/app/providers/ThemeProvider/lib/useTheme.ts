import { useContext } from 'react';
import { ThemeContext, Themes, LOCAL_STORAGE_THEME_KEY } from './themeContext';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggle = () => {
        const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return { theme, toggle };
};
