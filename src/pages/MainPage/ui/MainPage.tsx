import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('mainPage');
    return (
        <>
            {t('Main content')}
            {t('another-content')}
        </>
    );
};

export default MainPage;
