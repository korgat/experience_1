import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { valueOf } from '@/shared/types/types';

const routes = {
  main: '/',
  about: '/about',
} as const;

export type TRoutePaths = valueOf<typeof routes>;
export type TRouteNames = keyof typeof routes;

export const routeConfig: { path: TRoutePaths; element: JSX.Element }[] = [
  { path: routes.main, element: <MainPage /> },
  { path: routes.about, element: <AboutPage /> },
];
