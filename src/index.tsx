import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import App from '@/app/App';

import './shared/config/i18nConfig/i18n';
import { Suspense } from 'react';

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback="">
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
