import {
    FC, memo, useCallback, useState,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import NotificationSvg from '@/shared/assets/icons/notification.svg';
import { Popover } from '@/shared/ui/deprecated/Popups';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { BrowserView, MobileView } from '@/shared/ui/deprecated/View';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { toggleFeatures } from '@/shared/lib/features';
import { NotificationList } from '@/entities/Notification';

import cls from './NotificationBtn.module.scss';

interface NotificationBtnProps {
    className?: string,
}

/** Кнопка уведомления */
export const NotificationBtn: FC<NotificationBtnProps> = memo((props: NotificationBtnProps) => {
    const {
        className,
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Icon
            theme={toggleFeatures({
                name: 'isAppRedesigned',
                off: () => 'inverted',
                on: () => undefined,
            })}
            Svg={NotificationSvg}
            size={20}
        />
    );

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    height="250px"
                    autoScroll
                    trigger={trigger}
                >
                    <NotificationList className={cls.browserContent} inverted />
                </Popover>
            </BrowserView>
            <MobileView>
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onOpen}
                    className={classNames('', {}, [className])}
                    inverted
                >
                    {trigger}
                </Button>
                <Drawer
                    onClose={onClose}
                    isOpen={isOpen}
                >
                    <NotificationList className={cls.mobileContent} />
                </Drawer>
            </MobileView>
        </>
    );
});
