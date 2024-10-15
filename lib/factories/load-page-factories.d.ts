import { ActionCreator } from '@ngrx/store';
import { TNew } from '../actions/model-constructor';
import { IPageInfo, Page } from '../models';
import { StandardProps } from './util';
import { LoadPage, LoadPageFailure, LoadPageIfNecessary, LoadPageSuccess } from '../actions/load-page-actions';
export interface LoadPageProps extends StandardProps {
    page: Page;
}
export declare const createLoadPageAction: <TModel, T extends string, P extends StandardProps>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadPageProps) => LoadPage<TModel>>;
export interface LoadPageIfNecessaryProps extends LoadPageProps {
    maxAge?: number;
}
export declare const createLoadPageIfNecessaryAction: <TModel, T extends string, P extends LoadPageIfNecessaryProps>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadPageIfNecessaryProps) => LoadPageIfNecessary<TModel>>;
export interface LoadPageSuccessProps<TModel> extends StandardProps {
    entities: TModel[];
    pageInfo: IPageInfo;
}
export declare const createLoadPageSuccessAction: <TModel, T extends string, P extends LoadPageSuccessProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadPageSuccessProps<TModel>) => LoadPageSuccess<TModel>>;
export interface LoadPageFailureProps<TModel> extends StandardProps {
    error: any;
    page: Page;
}
export declare const createLoadPageFailureAction: <TModel, T extends string, P extends LoadPageFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadPageFailureProps<TModel>) => LoadPageFailure<TModel>>;
