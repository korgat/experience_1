import { classNames } from '@/shared/lib/classNames';
import cls from './Button.module.scss';

export enum EButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: EButtonTheme;
}

const Button = (props: ButtonProps) => {
  const { className = '', theme, ...rest } = props;
  return (
    <button {...rest} className={classNames(cls.button, {}, [className, cls[theme]])}>
      {props.children}
    </button>
  );
};

export default Button;
