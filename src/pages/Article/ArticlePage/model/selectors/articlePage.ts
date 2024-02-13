import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import { StateSchema } from 'shared/config/reduxConfig/stateShema';

export const getArticlePageIsLoading = (state: StateSchema) => state.articlePage?.isLoading;
export const getArticlePageError = (state: StateSchema) => state.articlePage?.error;
export const getArticlePageView = (
    state: StateSchema,
) => state.articlePage?.view || ArticleView.SMALL;
export const getArticlePageLimit = (state: StateSchema) => state.articlePage?.limit || 10;
export const getArticlePagePage = (state: StateSchema) => state.articlePage?.page || 1;
export const getArticlePageHasMore = (state: StateSchema) => state.articlePage?.hasMore;
export const getArticlePageInited = (state: StateSchema) => state.articlePage?._inited;
export const getArticlePageOrder = (state: StateSchema) => state.articlePage?.order || 'asc';
export const getArticlePageSort = (
    state: StateSchema,
) => state.articlePage?.sort || ArticleSortField.CREATED;
export const getArticlePageSearch = (state: StateSchema) => state.articlePage?.search ?? '';
export const getArticlePageType = (
    state: StateSchema,
) => state.articlePage?.type || ArticleType.All;
export const getArticlePageIndex = (state: StateSchema) => state.articlePage?.index || 0;