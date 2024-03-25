import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from '@/app/providers/ThemeProvider';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import './styles/index.scss';
import { AppRouter } from '@/app/providers/router';
import Navbar from '@/widgets/Navbar/ui/Navbar';

const App = () => {
  const { theme, toggle } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <AppRouter />
      <button onClick={toggle}>CHANGE THEME</button>
    </div>
  );
};

export default App;