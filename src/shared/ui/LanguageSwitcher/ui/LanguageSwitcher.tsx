import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import cls from './LanguageSwitcher.module.scss';
import { Button } from '@/shared/ui/Button';
import { EButtonTheme } from '@/shared/ui/Button/ui/Button';

type LanguageSwitcherProps = {
  className?: string;
};

const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { i18n } = useTranslation();
    const currLanguage = i18n.language;

    const languageSwitchHandler = () => {
        i18n.changeLanguage(currLanguage === 'en' ? 'ua' : 'en');
    };

    return (
        <Button
            className={classNames(cls.languageSwitcher, {}, [className])}
            theme={EButtonTheme.CLEAR}
            onClick={languageSwitchHandler}
        >
            {currLanguage}
        </Button>
    );
};

export default LanguageSwitcher;
