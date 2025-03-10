import React from 'react'

import { cn } from '@/lib/utils'

interface TestProps extends React.HTMLAttributes<HTMLDivElement> {}

const Test = (props: TestProps) => {
    const { className = '', ...rest } = props

    return (
        <div {...rest} className={cn('', {}, [className])}>
            Test
        </div>
    )
}

export default Test
