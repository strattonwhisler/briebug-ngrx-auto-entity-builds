import { ActionCreator } from '@ngrx/store';
import { Delete, DeleteFailure, DeleteMany, DeleteManyFailure, DeleteManySuccess, DeleteSuccess } from '../actions/delete-actions';
import { TNew } from '../actions/model-constructor';
import { StandardProps } from './util';
export interface DeleteProps<TModel> extends StandardProps {
    entity: TModel;
}
export declare const createDeleteAction: <TModel, T extends string, P extends DeleteProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeleteProps<TModel>) => Delete<TModel>>;
export declare const createDeleteSuccessAction: <TModel, T extends string, P extends DeleteProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeleteProps<TModel>) => DeleteSuccess<TModel>>;
export interface DeleteFailureProps<TModel> extends StandardProps {
    error: any;
    entity: TModel;
}
export declare const createDeleteFailureAction: <TModel, T extends string, P extends DeleteFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeleteFailureProps<TModel>) => DeleteFailure<TModel>>;
export interface DeleteManyProps<TModel> extends StandardProps {
    entities: TModel[];
}
export declare const createDeleteManyAction: <TModel, T extends string, P extends DeleteManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeleteManyProps<TModel>) => DeleteMany<TModel>>;
export declare const createDeleteManySuccessAction: <TModel, T extends string, P extends DeleteManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeleteManyProps<TModel>) => DeleteManySuccess<TModel>>;
export interface DeleteManyFailureProps<TModel> extends StandardProps {
    error: any;
    entities: TModel[];
}
export declare const createDeleteManyFailureAction: <TModel, T extends string, P extends DeleteManyFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeleteManyFailureProps<TModel>) => DeleteManyFailure<TModel>>;
