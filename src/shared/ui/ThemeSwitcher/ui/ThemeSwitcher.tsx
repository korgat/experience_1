import React from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames';
import cls from './ThemeSwitcher.module.scss';
import ThemeDark from '@/shared/assets/icons/theme-dark.svg';
import ThemeLight from '@/shared/assets/icons/theme-light.svg';
import { Themes } from '@/app/providers/ThemeProvider/lib/themeContext';
import { Button } from '@/shared/ui/Button';
import { EButtonTheme } from '@/shared/ui/Button/ui/Button';

interface ThemeSwitcherProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { theme, toggle } = useTheme();
    const { className = '', ...rest } = props;
    return (
        <Button
            {...rest}
            theme={EButtonTheme.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggle}
        >
            {theme === Themes.DARK ? <ThemeDark fill="red" /> : <ThemeLight />}
        </Button>
    );
};

export default ThemeSwitcher;
