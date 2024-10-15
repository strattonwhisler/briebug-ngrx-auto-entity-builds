import { ActionCreator } from '@ngrx/store';
import { Replace, ReplaceFailure, ReplaceMany, ReplaceManyFailure, ReplaceManySuccess, ReplaceSuccess } from '../actions/replace-actions';
import { TNew } from '../actions/model-constructor';
import { StandardProps } from './util';
export interface ReplaceProps<TModel> extends StandardProps {
    entity: TModel;
}
export declare const createReplaceAction: <TModel, T extends string, P extends ReplaceProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: ReplaceProps<TModel>) => Replace<TModel>>;
export declare const createReplaceSuccessAction: <TModel, T extends string, P extends ReplaceProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: ReplaceProps<TModel>) => ReplaceSuccess<TModel>>;
export interface ReplaceFailureProps<TModel> extends StandardProps {
    error: any;
    entity: TModel;
}
export declare const createReplaceFailureAction: <TModel, T extends string, P extends ReplaceFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: ReplaceFailureProps<TModel>) => ReplaceFailure<TModel>>;
export interface ReplaceManyProps<TModel> extends StandardProps {
    entities: TModel[];
}
export declare const createReplaceManyAction: <TModel, T extends string, P extends ReplaceManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: ReplaceManyProps<TModel>) => ReplaceMany<TModel>>;
export declare const createReplaceManySuccessAction: <TModel, T extends string, P extends ReplaceManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: ReplaceManyProps<TModel>) => ReplaceManySuccess<TModel>>;
export interface ReplaceManyFailureProps<TModel> extends StandardProps {
    error: any;
    entities: TModel[];
}
export declare const createReplaceManyFailureAction: <TModel, T extends string, P extends ReplaceManyFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: ReplaceManyFailureProps<TModel>) => ReplaceManyFailure<TModel>>;
