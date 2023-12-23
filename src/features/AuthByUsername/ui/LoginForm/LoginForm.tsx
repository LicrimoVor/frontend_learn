import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

/** Форма логина пользователя с помощью username */
export const LoginForm: FC<LoginFormProps> = (props) => {
    const { t } = useTranslation();

    const {
        className,
    } = props;

    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Input
                type="text"
                data-testid="login"
                className={cls.input}
                placeholder={t('EnterUsername')}
                autofocus
            />
            <Input
                type="text"
                data-testid="password"
                className={cls.input}
                placeholder={t('EnterPassword')}
            />
            <Button className={cls.loginBtn}>
                {t('Login')}
            </Button>
        </div>
    );
};
