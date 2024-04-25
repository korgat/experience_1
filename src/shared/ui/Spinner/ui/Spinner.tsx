import React from 'react';
import { classNames } from '@/shared/lib/classNames';
import './Spinner.css';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Spinner = (props: SpinnerProps) => {
    const { className = '', ...rest } = props;
    return (
        <div {...rest} className={classNames('lds-dual-ring', {}, [className])} />
    );
};

export default Spinner;
