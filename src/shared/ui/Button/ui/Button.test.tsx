import { render, screen } from '@testing-library/react';
import Button, { EButtonTheme } from './Button';

describe('classNames', () => {
    test('render test', () => {
        render(<Button>click</Button>);
        expect(screen.getByText('click')).toBeInTheDocument();
    });
    test('have clear class', () => {
        render(<Button theme={EButtonTheme.CLEAR}>click</Button>);
        expect(screen.getByText('click')).toHaveClass('clear');
    });
});
