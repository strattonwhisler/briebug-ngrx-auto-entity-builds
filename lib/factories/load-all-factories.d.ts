import { ActionCreator } from '@ngrx/store';
import { TNew } from '../actions/model-constructor';
import { StandardProps } from './util';
import { LoadAll, LoadAllFailure, LoadAllIfNecessary, LoadAllSuccess } from '../actions/load-all-actions';
export declare const createLoadAllAction: <TModel, T extends string, P extends StandardProps>(Type: TNew<TModel>) => ActionCreator<T, (props: StandardProps) => LoadAll<TModel>>;
export interface LoadAllIfNecessaryProps extends StandardProps {
    maxAge?: number;
}
export declare const createLoadAllIfNecessaryAction: <TModel, T extends string, P extends LoadAllIfNecessaryProps>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadAllIfNecessaryProps) => LoadAllIfNecessary<TModel>>;
export interface LoadAllSuccessProps<TModel> extends StandardProps {
    entities: TModel[];
}
export declare const createLoadAllSuccessAction: <TModel, T extends string, P extends LoadAllSuccessProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadAllSuccessProps<TModel>) => LoadAllSuccess<TModel>>;
export interface LoadAllFailureProps<TModel> extends StandardProps {
    error: any;
}
export declare const createLoadAllFailureAction: <TModel, T extends string, P extends LoadAllFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadAllFailureProps<TModel>) => LoadAllFailure<TModel>>;
