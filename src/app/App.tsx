import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from '@/app/providers/ThemeProvider';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import './styles/index.scss';
import { AppRouter } from '@/app/providers/router';
import Navbar from '@/widgets/Navbar/ui/Navbar';
import SideBar from '@/widgets/SideBar/ui/SideBar';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
