import { FC, memo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import AppLogoSvg from '@/shared/assets/icons/ghost_simple.svg';

import { HStack } from '../../Stack';
import { Icon } from '../../../redesigned/Icon';
import { AppLink } from '../../AppLink';
import cls from './AppLogo.module.scss';

interface AppLogoProps {
    className?: string,
    size?: number,
}

/**
 * Иконка проекта
*/
export const AppLogo: FC<AppLogoProps> = memo((props: AppLogoProps) => {
    const {
        className,
        size = 50,
    } = props;

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.AppLogo, {}, [className])}
        >
            <AppLink to="/">
                <Icon
                    size={size}
                    className={cls.appLogoSvg}
                    Svg={AppLogoSvg}
                />
            </AppLink>
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
        </HStack>
    );
});
