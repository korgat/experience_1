import { screen } from '@testing-library/react';

import SideBar from './SideBar';
import { renderWithTranslation } from '@/shared/lib/test/renderWithTranslation/renderWithTranslation';

describe('classNames', () => {
    test('render test', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
