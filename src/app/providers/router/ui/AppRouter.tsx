import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoader from '@/widgets/PageLoader/ui/PageLoader';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
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

export default AppRouter;
