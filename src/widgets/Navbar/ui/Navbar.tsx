import { classNames } from '@/shared/lib/classNames';
import AppLink, { ELinkTheme } from '@/shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps extends React.HTMLProps<HTMLDivElement> {}

const Navbar = (props: NavbarProps) => {
  const { className = '', ...rest } = props;
  return (
    <div {...rest} className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.linkContainer}>
        <AppLink theme={ELinkTheme.SECONDARY} to="/">
          Main
        </AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  );
};

export default Navbar;
