import { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/shared/lib/context/ThemeContext';
import { storeDecorator } from '@/shared/config/storybook/storeDecorator';
import { themeDecorator } from '@/shared/config/storybook/themeDecorator';
import { articleTest } from '@/entities/Article/testing';

import ArticleRecommend from './ArticleRecommend';

const meta: Meta<typeof ArticleRecommend> = {
    title: 'features/Article/ArticleRecommend',
    component: ArticleRecommend,
    decorators: [
        storeDecorator({}),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles?_limit=5`,
                method: 'GET',
                status: 200,
                response: [
                    articleTest,
                    articleTest,
                    articleTest,
                    articleTest,
                ],
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof ArticleRecommend>;

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
