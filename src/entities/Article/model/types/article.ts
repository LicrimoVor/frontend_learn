import { User } from 'entities/User';

export enum ArticleBlockType {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
    id: string,
    type: ArticleBlockType,
}

export interface ArticleBlockCode extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string,
}

export interface ArticleBlockImage extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string,
    title: string,
}

export interface ArticleBlockText extends ArticleBlockBase {
    type: ArticleBlockType.TEXT,
    paragraphs: string[],
    title?: string,
}

export type ArticleBlock = ArticleBlockCode | ArticleBlockImage | ArticleBlockText

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    MEDICINE = 'MEDICINE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL'
}

export interface Article {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[],
    user: User,
}
