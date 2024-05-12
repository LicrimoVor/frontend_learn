import { FC, memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { getUserInited } from '@/entities/User';
import { ThemeSwitcher } from '@/features/Switcher/ThemeSwitcher';
import { LangSwitcher } from '@/features/Switcher/LangSwitcher';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './DeprecatedSidebar.module.scss';

interface SidebarProps {
  className?: string
}

/** Устаревшая боковая панель */
export const DeprecatedSidebar: FC<SidebarProps> = memo((props: SidebarProps) => {
    const {
        className,
    } = props;

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const inited = useSelector(getUserInited);
    const sidebarItemsList = useSelector(getSidebarItems);

    const hundlerCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-wrap-button"
                onClick={hundlerCollapsed}
                className={cls.wrap}
                theme={ButtonTheme.CLEAR}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack
                className={cls.items}
                gap={8}
                Component="nav"
            >
                {inited && sidebarItemsList.map((item) => (
                    <SidebarItem
                        key={item.path}
                        item={item}
                        collapsed={collapsed}
                    />
                ))}
            </VStack>
            <HStack
                className={cls.switchers}
                max
                gap={collapsed ? 12 : 32}
                justify="center"
            >
                <ThemeSwitcher />
                <LangSwitcher
                    className={classNames(cls.lang, { [cls.collapsed]: collapsed })}
                    short={collapsed}
                />
            </HStack>
        </aside>
    );
});
