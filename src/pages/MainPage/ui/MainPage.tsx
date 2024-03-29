import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('mainPage');
  return (
    <div>
      {t('Main content')}
      {t('another-content')}
    </div>
  );
};

export default MainPage;
