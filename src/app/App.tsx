import { useTheme } from '@/app/providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from '@/app/providers/router';
import Navbar from '@/widgets/Navbar/ui/Navbar';
import SideBar from '@/widgets/SideBar/ui/SideBar';

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
