import { ButtonHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Button.module.scss';

export enum EButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: EButtonTheme;
}

const Button = (props: ButtonProps) => {
    const {
        className = '', theme, children, ...rest
    } = props;
    return (
        <button
            {...rest}
            type="button"
            className={classNames(cls.button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};

export default Button;
