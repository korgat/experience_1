import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const SideBar = (props: SideBarProps) => {
    const { className = '', ...rest } = props;
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const toggleHandler = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            {...rest}
            className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                style={{ alignSelf: 'center' }}
                onClick={toggleHandler}
            >
                {t('toggle')}
            </Button>
            <div className={cls.content}>{t('SideBar content')}</div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

export default SideBar;
