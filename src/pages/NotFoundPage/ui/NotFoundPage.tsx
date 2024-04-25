import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps extends React.HTMLAttributes<HTMLDivElement> {}

const NotFoundPage = (props: NotFoundPageProps) => {
    const { className = '', ...rest } = props;
    const { t } = useTranslation();
    return (
        <div {...rest} className={classNames(cls['not-found-page'], {}, [className])}>
            {t('page-not-found')}
        </div>
    );
};

export default NotFoundPage;
