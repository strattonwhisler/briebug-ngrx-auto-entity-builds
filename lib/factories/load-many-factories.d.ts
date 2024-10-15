import { ActionCreator } from '@ngrx/store';
import { TNew } from '../actions/model-constructor';
import { StandardProps } from './util';
import { LoadMany, LoadManyFailure, LoadManyIfNecessary, LoadManySuccess } from '../actions/load-many-actions';
export declare const createLoadManyAction: <TModel, T extends string, P extends StandardProps>(Type: TNew<TModel>) => ActionCreator<T, (props: StandardProps) => LoadMany<TModel>>;
export interface LoadManyIfNecessaryProps extends StandardProps {
    maxAge?: number;
}
export declare const createLoadManyIfNecessaryAction: <TModel, T extends string, P extends LoadManyIfNecessaryProps>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadManyIfNecessaryProps) => LoadManyIfNecessary<TModel>>;
export interface LoadManySuccessProps<TModel> extends StandardProps {
    entities: TModel[];
}
export declare const createLoadManySuccessAction: <TModel, T extends string, P extends LoadManySuccessProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadManySuccessProps<TModel>) => LoadManySuccess<TModel>>;
export interface LoadManyFailureProps<TModel> extends StandardProps {
    error: any;
}
export declare const createLoadManyFailureAction: <TModel, T extends string, P extends LoadManyFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadManyFailureProps<TModel>) => LoadManyFailure<TModel>>;
