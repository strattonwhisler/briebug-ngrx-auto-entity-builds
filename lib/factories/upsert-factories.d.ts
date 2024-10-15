import { ActionCreator } from '@ngrx/store';
import { Upsert, UpsertFailure, UpsertMany, UpsertManyFailure, UpsertManySuccess, UpsertSuccess } from '../actions/upsert-actions';
import { TNew } from '../actions/model-constructor';
import { StandardProps } from './util';
export interface UpsertProps<TModel> extends StandardProps {
    entity: TModel;
}
export declare const createUpsertAction: <TModel, T extends string, P extends UpsertProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: UpsertProps<TModel>) => Upsert<TModel>>;
export declare const createUpsertSuccessAction: <TModel, T extends string, P extends UpsertProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: UpsertProps<TModel>) => UpsertSuccess<TModel>>;
export interface UpsertFailureProps<TModel> extends StandardProps {
    error: any;
    entity: TModel;
}
export declare const createUpsertFailureAction: <TModel, T extends string, P extends UpsertFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: UpsertFailureProps<TModel>) => UpsertFailure<TModel>>;
export interface UpsertManyProps<TModel> extends StandardProps {
    entities: TModel[];
}
export declare const createUpsertManyAction: <TModel, T extends string, P extends UpsertManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: UpsertManyProps<TModel>) => UpsertMany<TModel>>;
export declare const createUpsertManySuccessAction: <TModel, T extends string, P extends UpsertManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: UpsertManyProps<TModel>) => UpsertManySuccess<TModel>>;
export interface UpsertManyFailureProps<TModel> extends StandardProps {
    error: any;
    entities: TModel[];
}
export declare const createUpsertManyFailureAction: <TModel, T extends string, P extends UpsertManyFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: UpsertManyFailureProps<TModel>) => UpsertManyFailure<TModel>>;
