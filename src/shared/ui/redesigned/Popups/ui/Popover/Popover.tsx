import {
    CSSProperties, FC, memo, ReactNode,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { HeadlessuiProvider, useHealdessuiContext } from '@/shared/lib/components/HeadlessuiProvider';

import { PopupDirectionConvert } from '../../styles/consts';
import { PopupDirection } from '../../styles/types';
import cls from './Popover.module.scss';
import popupsCls from '../../styles/popups.module.scss';

type PopoverMarginTopMenu = '8px' | '10px' | '12px';

const MapMarginTopClasses: Record<PopoverMarginTopMenu, string> = {
    '8px': 'margin_8px',
    '10px': 'margin_10px',
    '12px': 'margin_12px',
};

interface PopoverProps {
    trigger?: ReactNode,
    children?: ReactNode,
    className?: string,
    direction?: PopupDirection,
    height?: string,
    autoScroll?: boolean,
    marginTopMenu?:PopoverMarginTopMenu
}

/**
 * Тот же дроп-даун, но с любым внутренним содержимым
 */
const PopoverComponent: FC<PopoverProps> = memo((props: PopoverProps) => {
    const {
        className,
        children,
        trigger,
        direction = 'bottom right',
        height,
        autoScroll,
        marginTopMenu,
    } = props;

    const { library: ui, isLoading } = useHealdessuiContext();

    const panelClasses = [
        PopupDirectionConvert[direction],
        popupsCls.popupMenu,
        marginTopMenu && cls[MapMarginTopClasses[marginTopMenu]],
    ];

    const styles: CSSProperties = {
        height,
        overflowY: autoScroll ? 'scroll' : undefined,
    };

    if (isLoading) {
        return null;
    }

    return (
        <ui.Popover className={classNames(cls.Popover, {}, [className, popupsCls.Popup])}>
            <ui.Popover.Button as="div">
                {trigger}
            </ui.Popover.Button>
            <ui.Popover.Panel
                style={styles}
                className={classNames(cls.menu, {}, panelClasses)}
            >
                {children}
            </ui.Popover.Panel>
        </ui.Popover>
    );
});

export default memo(({ children, ...otherProps }: PopoverProps) => (
    <HeadlessuiProvider>
        <PopoverComponent {...otherProps}>
            {children}
        </PopoverComponent>
    </HeadlessuiProvider>
));
export type PopoverType = typeof PopoverComponent;