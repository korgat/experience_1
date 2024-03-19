import { createContext, Dispatch, SetStateAction } from 'react';

export enum EThems {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  theme?: EThems;
  setTheme?: Dispatch<SetStateAction<EThems>>;
}

export const LOCAL_STORAGE_THEME_KEY = 'them';

export const ThemeContext = createContext<ThemeContextProps>({});
