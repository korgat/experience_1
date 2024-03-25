import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map((config) => (
          <Route path={config.path} element={config.element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
