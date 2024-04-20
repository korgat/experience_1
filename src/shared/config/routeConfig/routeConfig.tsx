import React from 'react';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { type ValueOf } from '@/shared/types/types';

const routes = {
  main: '/',
  about: '/about',
} as const;

export type TRoutePaths = ValueOf<typeof routes>;
export type TRouteNames = keyof typeof routes;

export const routeConfig: Array<{ path: TRoutePaths; element: React.ReactNode }> = [
  { path: routes.main, element: <MainPage /> },
  { path: routes.about, element: <AboutPage /> },
];
