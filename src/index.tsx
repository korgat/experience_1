import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import App from '@/app/App';

import './shared/config/i18nConfig/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <Suspense fallback="">
                    <App />
                </Suspense>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
