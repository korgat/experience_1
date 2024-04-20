import { createContext, type Dispatch, type SetStateAction } from 'react';

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  theme?: Themes;
  setTheme?: Dispatch<SetStateAction<Themes>>;
}

export const LOCAL_STORAGE_THEME_KEY = 'them';

export const ThemeContext = createContext<ThemeContextProps>({});
