import { ReactNode } from 'react';
import { Link, type To } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames';
import cls from './AppLink.module.scss';
import { type TRoutePaths } from '@/shared/config/routeConfig/routeConfig';

export enum ELinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps {
  className?: string;
  to: TRoutePaths;
  children: ReactNode;
  theme?: ELinkTheme;
}

const AppLink = (props: AppLinkProps) => {
    const {
        className = '', theme = ELinkTheme.PRIMARY, to, children, ...rest
    } = props;

    return (
        <Link
            {...rest}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            to={to as To}
        >
            {children}
        </Link>
    );
};

export default AppLink;
