import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema } from '@/shared/config/reduxConfig/stateShema';

import i18nForTests from '@/shared/config/i18n/i18nForTests';

import { StoreProvider } from '../../../../app/providers/StoreProvider';

interface componentRenderOptions {
    route?: string[],
    initialState?: DeepPartial<StateSchema>
}

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

/** Декоратор для тестов. Добавляет стор, роутер и i18n */
export const componentRender = (
    component: ReactNode,
    options: componentRenderOptions = {},
): ReturnType<typeof render> => {
    const {
        route = ['/'],
        initialState = {},
    } = options;

    return render(
        <MemoryRouter initialEntries={route} initialIndex={1}>
            <StoreProvider initialState={initialState as StateSchema}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
};
