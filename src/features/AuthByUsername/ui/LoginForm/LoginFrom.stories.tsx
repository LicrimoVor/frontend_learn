import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const login = canvas.getByTestId('login');

        await userEvent.type(login, 'project@test.ru', {
            delay: 100,
        });

        const password = canvas.getByTestId('password');
        await userEvent.type(password, 'secret_password', {
            delay: 100,
        });
    },
};

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
    ],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const login = canvas.getByTestId('login');

        await userEvent.type(login, 'project@test.ru', {
            delay: 100,
        });

        const password = canvas.getByTestId('password');
        await userEvent.type(password, 'secret_password', {
            delay: 100,
        });
    },
};
