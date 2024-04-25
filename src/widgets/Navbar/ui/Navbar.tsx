import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, ELinkTheme } from '@/shared/ui/AppLink';

import { classNames } from '@/shared/lib/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps extends React.HTMLProps<HTMLDivElement> {}

const Navbar = (props: NavbarProps) => {
    const { className = '', ...rest } = props;
    const { t } = useTranslation();
    return (
        <div
            {...rest}
            className={classNames(cls.navbar, {}, [className])}
        >
            <div className={cls.linkContainer}>
                <AppLink theme={ELinkTheme.SECONDARY} to="/">
                    {t('main-route-link')}
                </AppLink>
                <AppLink to="/about">{t('about-route-link')}</AppLink>
            </div>
        </div>
    );
};

export default Navbar;
