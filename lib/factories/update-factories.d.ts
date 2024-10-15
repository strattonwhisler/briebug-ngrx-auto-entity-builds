import { ActionCreator } from '@ngrx/store';
import { Update, UpdateFailure, UpdateMany, UpdateManyFailure, UpdateManySuccess, UpdateSuccess } from '../actions/update-actions';
import { TNew } from '../actions/model-constructor';
import { StandardProps } from './util';
export interface UpdateProps<TModel> extends StandardProps {
    entity: TModel;
}
export declare const createUpdateAction: <TModel, T extends string, P extends UpdateProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: UpdateProps<TModel>) => Update<TModel>>;
export declare const createUpdateSuccessAction: <TModel, T extends string, P extends UpdateProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: UpdateProps<TModel>) => UpdateSuccess<TModel>>;
export interface UpdateFailureProps<TModel> extends StandardProps {
    error: any;
    entity: TModel;
}
export declare const createUpdateFailureAction: <TModel, T extends string, P extends UpdateFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: UpdateFailureProps<TModel>) => UpdateFailure<TModel>>;
export interface UpdateManyProps<TModel> extends StandardProps {
    entities: TModel[];
}
export declare const createUpdateManyAction: <TModel, T extends string, P extends UpdateManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: UpdateManyProps<TModel>) => UpdateMany<TModel>>;
export declare const createUpdateManySuccessAction: <TModel, T extends string, P extends UpdateManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: UpdateManyProps<TModel>) => UpdateManySuccess<TModel>>;
export interface UpdateManyFailureProps<TModel> extends StandardProps {
    error: any;
    entities: TModel[];
}
export declare const createUpdateManyFailureAction: <TModel, T extends string, P extends UpdateManyFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: UpdateManyFailureProps<TModel>) => UpdateManyFailure<TModel>>;
