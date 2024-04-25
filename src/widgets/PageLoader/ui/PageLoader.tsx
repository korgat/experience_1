import React from 'react';
import { Spinner } from '@/shared/ui/Spinner';
import { classNames } from '@/shared/lib/classNames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const PageLoader = (props: PageLoaderProps) => {
    const { className = '', ...rest } = props;
    return (
        <div {...rest} className={classNames(cls['page-loader'], {}, [className])}>
            <Spinner />
        </div>
    );
};

export default PageLoader;
