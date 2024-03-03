import type { Meta, StoryObj } from '@storybook/react';

import { themeDecorator } from '@/shared/config/storybook/themeDecorator/themeDecorator';

import { Theme } from '@/app/providers/ThemeProvider';
import { CommentCard } from './CommentCard';
import { commentTest } from '../../test/data';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    args: {
        comment: commentTest,
    },
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
    decorators: [
        themeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    decorators: [
        themeDecorator(Theme.DARK),
    ],
};

export const Red: Story = {
    decorators: [
        themeDecorator(Theme.RED),
    ],
};

export const IsLoading: Story = {
    args: {
        isLoading: true,
    },
};
