import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { useState } from 'react';
import cls from './SideBar.module.scss';

interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {}

const SideBar = (props: SideBarProps) => {
  const { className = '', ...rest } = props;
  const [collapsed, setCollapsed] = useState(false);

  const toggleHandler = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div {...rest} className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [className])}>
      <Button style={{ alignSelf: 'center' }} onClick={toggleHandler}>
        Toggle
      </Button>
      <div className={cls.content}>Some content</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default SideBar;
