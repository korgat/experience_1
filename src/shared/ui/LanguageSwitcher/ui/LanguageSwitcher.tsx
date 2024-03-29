import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { EButtonTheme } from '@/shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const currLanguage = i18n.language;

  const languageSwitchHandler = () => {
    i18n.changeLanguage(currLanguage === 'en' ? 'ua' : 'en');
  };
  return (
    <Button
      className={classNames(cls.languageSwitcher, {}, [className])}
      theme={EButtonTheme.CLEAR}
      onClick={languageSwitchHandler}>
      {currLanguage}
    </Button>
  );
};

export default LanguageSwitcher;
