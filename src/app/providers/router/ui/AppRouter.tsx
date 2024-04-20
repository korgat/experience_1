import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map((config) => (
          <Route
            key={config.path}
            path={config.path}
            element={<div className="page-content">{config.element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
