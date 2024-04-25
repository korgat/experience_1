import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import cls from './ErrorPage.module.scss';
import { Button } from '@/shared/ui/Button';

interface ErrorPageProps extends React.HTMLAttributes<HTMLDivElement> {}

const ErrorPage = (props: ErrorPageProps) => {
    const { className = '', ...rest } = props;
    const { t } = useTranslation();

    return (
        <div {...rest} className={classNames(cls['error-page'], {}, [className])}>
            <div>{t('error-page-text')}</div>
            <Button>{t('reload-btn')}</Button>
        </div>
    );
};

export default ErrorPage;
