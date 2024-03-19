import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { AsyncAboutPage } from './pages/AboutPage/AboutPageAsync';
import { AsyncMainPage } from './pages/MainPage/AsyncMainPage';
import './styles/index.scss';
import { Suspense, useContext } from 'react';
import { ThemeContext } from './theme/themeContext';
import { useTheme } from './theme/useTheme';

const App = () => {
  const { theme, toggle } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggle}>CHANGE THEME</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AsyncMainPage />} />
          <Route path="/about" element={<AsyncAboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
