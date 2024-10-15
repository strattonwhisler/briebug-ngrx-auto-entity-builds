import { ActionCreator } from '@ngrx/store';
import { Load, LoadFailure, LoadIfNecessary, LoadSuccess } from '../actions/load-actions';
import { TNew } from '../actions/model-constructor';
import { StandardProps } from './util';
export interface LoadProps extends StandardProps {
    keys?: any;
}
export declare const createLoadAction: <TModel, T extends string, P extends LoadProps>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadProps) => Load<TModel>>;
export interface LoadIfNecessaryProps extends LoadProps {
    maxAge?: number;
}
export declare const createLoadIfNecessaryAction: <TModel, T extends string, P extends LoadIfNecessaryProps>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadIfNecessaryProps) => LoadIfNecessary<TModel>>;
export interface LoadSuccessProps<TModel> extends LoadProps {
    entity: TModel;
}
export declare const createLoadSuccessAction: <TModel, T extends string, P extends LoadSuccessProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadSuccessProps<TModel>) => LoadSuccess<TModel>>;
export interface LoadFailureProps<TModel> extends LoadProps {
    error: any;
}
export declare const createLoadFailureAction: <TModel, T extends string, P extends LoadFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadFailureProps<TModel>) => LoadFailure<TModel>>;
